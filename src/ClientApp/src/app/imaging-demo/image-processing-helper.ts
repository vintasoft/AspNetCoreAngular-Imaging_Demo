import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

let _imageProcessingHelper: ImageProcessingHelper;

/**
 * A helper that helps to apply image processing commands to an image.
 */
export class ImageProcessingHelper {

  _unblockUiFunc: Function;

  // a value indicating whether visual tool selection is used
  _isVisualToolSelectionUsed = false;

  // the dialog that allows to view and change the settings of image processing command
  _imageProcessingCommandSettingsDialog: Vintasoft.Imaging.UI.Dialogs.WebUiPropertyGridDialogJS | null = null;

  // a value indicating whether the image processing command settings dialog was shown
  _isImageProcessingCommandSettingsDialogShown = false;



  constructor(private modalService: NgbModal, unblockUiFunc: Function) {
    _imageProcessingHelper = this;

    this._unblockUiFunc = unblockUiFunc;
  }



  /**
   * The "Settings" button in image processing panel is clicked.
   * @param event Event.
   * @param command Selected image processing command.
   */
  imageProcessingPanel_settingsButtonClicked(event: any, command: Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS) {
    if (command != null) {
      let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
      let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
      let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();

      // if command is WebQuadrilateralWarpCommandJS
      if (command instanceof Vintasoft.Imaging.ImageProcessing.WebQuadrilateralWarpCommandJS) {
        // get the destination points
        var commandDestPoints = command.get_DestinationPoints();
        // if points do not exist
        if (commandDestPoints.length === 0) {
          // get focused image
          let focusedImage: Vintasoft.Shared.WebImageJS = imageViewer.get_FocusedImage();
          // if image exists
          if (focusedImage != null) {
            let size: any = focusedImage.get_Size();
            // create destination points
            let destPoints: object[] = [{ x: 0, y: 0 }];
            destPoints.push({ x: size.width / 2, y: 0 });
            destPoints.push({ x: 0, y: size.height / 2 });
            destPoints.push({ x: size.width / 2, y: size.height / 2 });

            // set destination points for WebQuadrilateralWarpCommandJS
            command.set_DestinationPoints(destPoints);
          }
        }
      }

      // if the image processing settings dialog was not shown earlier
      if (!this._isImageProcessingCommandSettingsDialogShown) {
        // get a value indicating whether the undo manager is enabled in image viewer
        var isUndoManagerEnabled = imageViewer.get_UndoManager().get_IsEnabled();
        // if undo manager is enabled
        if (isUndoManagerEnabled) {
          // if image processing command can modify image
          if (command.get_CanModifyImage()) {
            // specify that the image processing command should not change the source image file
            command.set_ChangeSource(false);
          }
        }
      }

      // if previous image processing dialog exists
      if (this._imageProcessingCommandSettingsDialog != null) {
        // remove dialog from web document viewer
        docViewer.get_Items().removeItem(this._imageProcessingCommandSettingsDialog);
        // clear link to dialog
        this._imageProcessingCommandSettingsDialog = null;
      }

      // create the property grid for image processing command
      var propertyGrid = new Vintasoft.Shared.WebPropertyGridJS(command);

      // create the image processing dialog
      this._imageProcessingCommandSettingsDialog = new Vintasoft.Imaging.UI.Dialogs.WebUiPropertyGridDialogJS(
        propertyGrid,
        {
          title: "Image processing command settings",
          cssClass: "vsui-dialog imageProcessingSettings",
          localizationId: "imageProcessingSettingsDialog"
        });
      // add dialog to the web document viewer
      docViewer.get_Items().addItem(this._imageProcessingCommandSettingsDialog);

      // remember that the image processing settings dialog was shown
      this._isImageProcessingCommandSettingsDialogShown = true;

      // show the dialog
      this._imageProcessingCommandSettingsDialog.show();
    }
  }

  /**
   * Image processing is starting.
   * @param event Event.
   * @param command Selected image processing command.
   */
  imageProcessingPanel_processingStarting(event: any, command: Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS) {
    if (command == null)
      return;

    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();

    // if the image processing settings dialog was not shown earlier
    if (!this._isImageProcessingCommandSettingsDialogShown) {
      // get a value indicating whether the undo manager is enabled in image viewer
      var isUndoManagerEnabled = imageViewer.get_UndoManager().get_IsEnabled();
      // if undo manager is enabled
      if (isUndoManagerEnabled) {
        // if image processing command can modify image
        if (command.get_CanModifyImage()) {
          // specify that the image processing command should not change the source image file
          command.set_ChangeSource(false);
        }
      }
    }

    // get visual tool
    let visualTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS = imageViewer.get_VisualTool();
    // if tool exists and tool is Rectangular selection
    if (visualTool != null && visualTool.get_Name() === "RectangularSelection") {
      let rectangularSelectionVisualTool: Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS = visualTool as Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS;
      // get selection
      let rect: any = rectangularSelectionVisualTool.get_Rectangle();
      if (rect.width !== 0 && rect.height !== 0) {
        // if command can work with image region
        if ((command instanceof Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS) ||
          (command instanceof Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS)) {
          // use selection in command
          command.set_Region(rect);
          // specify that image processing command uses image region from rectangular selection visual tool
          _imageProcessingHelper._isVisualToolSelectionUsed = true;
        }
      }
    }
  }

  /**
   * Image processing is finished.
   * @param event Event.
   * @param eventArgs Event args.
   */
  imageProcessingPanel_processingFinished(event: any, eventArgs: any) {
    let data = eventArgs.data;
    if (data.success) {
      let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
      let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
      let command: Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS = eventArgs.command;

      // if image processing command did not change the image, i.e. image processing command is information command
      if (data.processedImage == null) {
        // show the result of information image processing command
        _imageProcessingHelper.__showInformativeImageProcessingCommandResult(docViewer, data);
      }

      // if image processing command result contains regions
      if (_imageProcessingHelper.__hasRegionsInImageProcessingResult(data)) {
        _imageProcessingHelper.__highlightInformativeImageProcessingCommandResults(docViewer, data);
      }

      // if image processing command can work with image region
      if ((command instanceof Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS) ||
        (command instanceof Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS)) {
        // if image processing command uses image region from rectangular selection visual tool
        if (_imageProcessingHelper._isVisualToolSelectionUsed) {
          // reset information about image region in image processing command
          command.setRegion(0, 0, 0, 0);
          // specify that image processing command does not use image region from rectangular selection visual tool
          _imageProcessingHelper._isVisualToolSelectionUsed = false;
        }
      }
    }
  }

  /**
   * Informative image processing command is executed successfully.
   * @param docViewer The document viewer.
   * @param imageProcessingResult The result of image processing.
   */
  __showInformativeImageProcessingCommandResult(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS, imageProcessingResult: any) {
    // unblock the UI
    _imageProcessingHelper._unblockUiFunc();

    // delete properties, which should not be shown in property grid with information about the image processing result
    delete imageProcessingResult.success;
    delete imageProcessingResult.blocked;
    delete imageProcessingResult.errorMessage;
    delete imageProcessingResult.guid;
    delete imageProcessingResult.sourceImage;

    let propertGrid: Vintasoft.Shared.WebPropertyGridJS = new Vintasoft.Shared.WebPropertyGridJS(imageProcessingResult);

    // create dialog that displays image processing result
    let dlg: Vintasoft.Imaging.UI.Dialogs.WebUiPropertyGridDialogJS =
      new Vintasoft.Imaging.UI.Dialogs.WebUiPropertyGridDialogJS(
        propertGrid,
        {
          title: "Image processing result",
          cssClass: "vsui-dialog imageProcessingResult",
          localizationId: "imageProcessingResultDialog"
        });
    docViewer.get_Items().addItem(dlg);
    dlg.show();
  }

  /**
   * Returns a value indicating whether the image processing command results contains detected regions.
   * @param {object} imageProcessingResult The result of applying the command to an image.
   * @returns {boolean} True - result contains detected regions; False - result does not contain detected regions.
   */
  __hasRegionsInImageProcessingResult(imageProcessingResult: any) {
    if (imageProcessingResult.documentRegions != null)
      return true;
    if (imageProcessingResult.regions != null)
      return true;
    if (imageProcessingResult.halftoneRegions != null)
      return true;
    if (imageProcessingResult.tableRegions != null)
      return true;
    return false;
  }

  /**
   * Highlights regions in image viewer.
   * @param docViewer DocumentViewer.
   * @param imageProcessingResult The result of image processing.
   */
  __highlightInformativeImageProcessingCommandResults(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS, imageProcessingResult: any) {
    let fillColor: string = "rgba(255,255,0,0.3)";
    let highlightRegions: object[] | null = null;

    let documentRegions: object[] = imageProcessingResult.documentRegions;
    if (documentRegions != null) {
      highlightRegions = documentRegions;
      fillColor = "rgba(255,255,0,0.3)";
    }
    else {
      let regions: object[] = imageProcessingResult.regions;
      if (regions != null) {
        highlightRegions = regions;
        fillColor = "rgba(0,255,0,0.3)";
      }
      else {
        let halftoneRegions: object[] = imageProcessingResult.halftoneRegions;
        if (halftoneRegions != null) {
          highlightRegions = halftoneRegions;
          fillColor = "rgba(0,0,255,0.3)";
        }
        else {
          let tableRegions: object[] = imageProcessingResult.tableRegions;
          if (tableRegions != null) {
            highlightRegions = tableRegions;
            fillColor = "rgba(255,255,0,0.3)";
          }
        }
      }
    }
    if (highlightRegions == null) {
      return;
    }

    // get the highlight tool from web document viewer
    let highlightVisualTool: Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS = docViewer.getVisualToolById("HighlightTool") as Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS;
    // set the highlight tool as current visual tool of web document viewer
    docViewer.set_CurrentVisualTool(highlightVisualTool);

    // array of WebHighlightObjectsJS
    let highlightObjects: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS[] = [];

    // if highlight regions are defined
    if (highlightRegions != null) {
      // for each region
      for (let i: number = 0; i < highlightRegions.length; i++) {
        // get current region
        let region: any = highlightRegions[i];
        let highlightObject: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS;
        // if source region is rectangle
        if (region.width != null)
          // create WebHighlightObjectJS
          highlightObject = Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS.createObjectFromRectangle(region);
        // if source region is array of points
        else
          // create WebHighlightObjectJS
          highlightObject = Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS.createObjectFromPolygon(region);
        // if region contains information about region type
        if (region.type != null)
          // add region type as tooltip
          highlightObject.set_ToolTip(region.type);

        // add created WebHighlightObjectJS
        highlightObjects.push(highlightObject);
      }
    }

    // clear highlight regions in highlight tool
    highlightVisualTool.clearItems();
    // add highlight regions to the highlight tool
    highlightVisualTool.addItems(new Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectsJS(highlightObjects, fillColor, 'rgba(0,0,0,1)'));
  }

}
