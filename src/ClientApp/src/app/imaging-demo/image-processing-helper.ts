import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

let _imageProcessingHelper: ImageProcessingHelper;

/**
 * A helper that helps to apply image processing commands to an image.
 */
export class ImageProcessingHelper {

  _unblockUiFunc: Function;

  // A value indicating whether visual tool selection is used.
  _isVisualToolSelectionUsed = false;
  _imageProcessingCommandSettingsDialog: Vintasoft.Imaging.DocumentViewer.Dialogs.WebUiPropertyGridDialogJS | null = null;



  constructor(private modalService: NgbModal, unblockUiFunc: Function) {
    _imageProcessingHelper = this;

    this._unblockUiFunc = unblockUiFunc;
  }



  /**
   * The "Settings" button in image processing panel is clicked.
   * @param event Event.
   * @param command Selected image processing command.
   */
  imageProcessingPanel_settingsButtonClicked(event: any, command: any) {
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
      this._imageProcessingCommandSettingsDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebUiPropertyGridDialogJS(
        propertyGrid,
        {
          title: "Image processing command settings",
          cssClass: "vsui-dialog imageProcessingSettings",
          localizationId: "imageProcessingSettingsDialog"
        });
      // add dialog to the web document viewer
      docViewer.get_Items().addItem(this._imageProcessingCommandSettingsDialog);

      // show the dialog
      this._imageProcessingCommandSettingsDialog.show();
    }
  }

  /**
   * Image processing is starting.
   * @param event Event.
   * @param command Selected image processing command.
   */
  imageProcessingPanel_processingStarting(event: any, command: Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS) {
    if (command == null)
      return;

    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();

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
      if (data.processedImage == null)
        // show the image processing results
        _imageProcessingHelper.__informativeImageProcessingCommand_success(docViewer, data);

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
  __informativeImageProcessingCommand_success(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS, imageProcessingResult: any) {
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
    let dlg: Vintasoft.Imaging.DocumentViewer.Dialogs.WebUiPropertyGridDialogJS =
      new Vintasoft.Imaging.DocumentViewer.Dialogs.WebUiPropertyGridDialogJS(
        propertGrid,
        {
          title: "Image processing result",
          cssClass: "vsui-dialog imageProcessingResult",
          localizationId: "imageProcessingResultDialog"
        });
    docViewer.get_Items().addItem(dlg);
    dlg.show();

    // get regions, which must be highlighted in image viewer
    let highlightRegions: any = _imageProcessingHelper.__getHighlightRegionsFromImageProcessingResult(imageProcessingResult);
    // if regions exist
    if (highlightRegions != null) {
      // highlight regions in image viewer
      _imageProcessingHelper.__highlightInformativeImageProcessingCommandResults(docViewer, highlightRegions.regions, highlightRegions.fillColor)
    }
  }

  /**
   * Returns regions, which must be highlighted in image viewer.
   * @param imageProcessingResult The result of image processing.
   */
  __getHighlightRegionsFromImageProcessingResult(imageProcessingResult: any) {
    let regions: object[] = imageProcessingResult.regions;
    let halftoneRegions: object[] = imageProcessingResult.halftoneRegions;
    let documentRegions: object[] = imageProcessingResult.documentRegions;
    if (regions != null || halftoneRegions != null || documentRegions != null) {
      let fillColor: string = "rgba(255,255,0,0.3)";
      let highlightRegions: object[] | null = null;
      if (documentRegions != null) {
        highlightRegions = documentRegions;
        fillColor = "rgba(255,255,0,0.3)";
      }
      else if (regions != null) {
        highlightRegions = regions;
        fillColor = "rgba(0,255,0,0.3)";
      }
      else if (halftoneRegions != null) {
        highlightRegions = halftoneRegions;
        fillColor = "rgba(0,0,255,0.3)";
      }
      return {
        regions: highlightRegions,
        fillColor: fillColor
      };
    }
    return null;
  }

  /**
   * Highlights regions in image viewer.
   * @param docViewer DocumentViewer.
   * @param highlightRegions Regions.
   * @param fillColor Fill color.
   */
  __highlightInformativeImageProcessingCommandResults(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS, highlightRegions: object[], fillColor: string) {
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
