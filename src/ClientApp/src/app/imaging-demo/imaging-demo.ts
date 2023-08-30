import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ErrorMessageDialog } from "../dialogs/error-message-dialog";
import { BlockUiDialog } from '../dialogs/block-ui-dialog';
import { ImageViewerSettingsDialog } from '../dialogs/image-viewer-settings-dialog';
import { OpenFileHelper } from './open-file-helper';
import { CustomRotationInImageViewerHelper } from './custom-rotation-in-image-viewer-helper';
import { ImageProcessingHelper } from './image-processing-helper';


var _imagingDemoComponent: ImagingDemoComponent;


@Component({
  selector: 'imaging-demo',
  templateUrl: './imaging-demo.html',
})
export class ImagingDemoComponent {

  // Document viewer.
  _docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS | null = null;

  // Helps to open files.
  _openFileHelper: OpenFileHelper | null = null;

  // Dialog that allows to block UI.
  _blockUiDialog: BlockUiDialog | null = null;



  constructor(public modalService: NgbModal, private httpClient: HttpClient) {
    _imagingDemoComponent = this;
  }



  /**
   * Component is initializing.
   */
  ngOnInit() {
    // get identifier of current HTTP session
    this.httpClient.get<any>('api/Session/GetSessionId').subscribe(data => {
      // set the session identifier
      Vintasoft.Shared.WebImagingEnviromentJS.set_SessionId(data.sessionId);

      // specify web services, which should be used by Vintasoft Web Document Viewer
      Vintasoft.Shared.WebServiceJS.defaultFileService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftFileApi");;
      Vintasoft.Shared.WebServiceJS.defaultImageCollectionService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageCollectionApi");
      Vintasoft.Shared.WebServiceJS.defaultImageService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageApi");
      Vintasoft.Shared.WebServiceJS.defaultImageProcessingService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageProcessingApi");
      Vintasoft.Shared.WebServiceJS.defaultImageProcessingDocCleanupService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageProcessingDocCleanupApi");

      // register new UI elements
      this.__registerNewUiElements();

      // create the document viewer settings
      let docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer", "documentViewer");

      // initialize main menu of document viewer
      this.__initMenu(docViewerSettings);

      // initialize side panel of document viewer
      this.__initSidePanel(docViewerSettings);

      // initialize image viewer panel of document viewer
      this.__initImageViewerPanel(docViewerSettings);

      // create the document viewer
      this._docViewer = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS(docViewerSettings);

      // subscribe to the "warningOccured" event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "warningOccured", this.__docViewer_warningOccured);
      // subscribe to the asyncOperationStarted event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "asyncOperationStarted", this.__docViewer_asyncOperationStarted);
      // subscribe to the asyncOperationFinished event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "asyncOperationFinished", this.__docViewer_asyncOperationFinished);
      // subscribe to the asyncOperationFailed event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "asyncOperationFailed", this.__docViewer_asyncOperationFailed);

      // initialize visual tools
      this.__initializeVisualTools(this._docViewer);

      // get the image viewer of document viewer
      let imageViewer1: Vintasoft.Imaging.UI.WebImageViewerJS = this._docViewer.get_ImageViewer();
      // specify that image viewer must show images in the single continuous column mode
      imageViewer1.set_DisplayMode(new Vintasoft.Imaging.WebImageViewerDisplayModeEnumJS("SingleContinuousColumn"));
      // specify that image viewer must show images in the fit width mode
      imageViewer1.set_ImageSizeMode(new Vintasoft.Imaging.WebImageSizeModeEnumJS("FitToWidth"));
      // create the progress image
      let progressImage = new Image();
      progressImage.src = "Images/fileUploadProgress.gif";
      // specify that the image viewer must use the progress image for indicating the image loading progress
      imageViewer1.set_ProgressImage(progressImage);

      // subscribe to the focusedIndexChanged event of image viewer
      Vintasoft.Shared.subscribeToEvent(imageViewer1, "focusedIndexChanged", this.__imageViewer_focusedIndexChanged);

      // get the visual tool, which allows to pan images in image viewer
      let panTool: Vintasoft.Imaging.UI.VisualTools.WebPanToolJS = this._docViewer.getVisualToolById("PanTool");
      // set the visual tool as active visual tool in image viewer
      this._docViewer.set_CurrentVisualTool(panTool);

      // copy the default file to the uploaded image files directory and open the file
      this._openFileHelper = new OpenFileHelper(this.modalService, this._docViewer, this.__showErrorMessage);
      this._openFileHelper.openDefaultImageFile("VintasoftImagingDemo.pdf");
    });
  }



  // === "View" toolbar ===

  /**
   * Creates UI button for showing image viewer settings dialog.
   */
  __createImageViewerSettingsButton() {
    // create the button that allows to show a dialog with image viewer settings
    return new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
      cssClass: "vsdv-imageViewerSettingsButton",
      title: "Show Image Viewer Settings",
      localizationId: "imageViewerSettingsButton",
      onClick: _imagingDemoComponent.__imageViewerSettingsButton_clicked
    });
  }

  /**
   * "Show Image Viewer Settings" button is clicked.
   * @param event
   * @param uiElement
   */
  __imageViewerSettingsButton_clicked(event: object, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    if (docViewer != null) {
      let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();
      if (imageViewer != null) {
        let dlg: ImageViewerSettingsDialog = new ImageViewerSettingsDialog(_imagingDemoComponent.modalService);
        dlg.imageViewer = imageViewer;
        dlg.open();
      }
    }
  }



  // === Init UI ===

  /**
   * Registers custom UI elements in "WebUiElementsFactoryJS".
   */
  __registerNewUiElements() {
    // register the "Image viewer settings" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("imageViewerSettingsButton", this.__createImageViewerSettingsButton);
  }

  /**
   * Initializes main menu of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initMenu(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = docViewerSettings.get_Items();

    let uploadFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = items.getItemByRegisteredId("uploadFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadFileButton != null)
      uploadFileButton.set_FileExtensionFilter(".bmp, .emf, .gif, .ico, .cur, .jpg, .jpeg, .jls, .pcx, .png, .tif, .tiff, .wmf, .jb2, .jbig2, .jp2, .j2k, .j2c, .jpc, .cr2, .crw, .nef, .nrw, .dng, .dcm, .dic, .acr, .pdf");

    // get the "View" menu panel
    let viewMenuPanel: Vintasoft.Imaging.UI.Panels.WebUiPanelJS = items.getItemByRegisteredId("viewMenuPanel") as Vintasoft.Imaging.UI.Panels.WebUiPanelJS;
    // if menu panel is found
    if (viewMenuPanel != null) {
      // get items of menu panel
      let viewMenuPanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = viewMenuPanel.get_Items();
      // add the "Image viewer settings" button to the menu panel
      viewMenuPanelItems.insertItem(viewMenuPanelItems.get_Count() - 1, "imageViewerSettingsButton");
    }
  }

  /**
   * Initializes side panel of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initSidePanel(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = docViewerSettings.get_Items();

    let sidePanel: Vintasoft.Imaging.UI.Panels.WebUiSidePanelJS = items.getItemByRegisteredId("sidePanel") as Vintasoft.Imaging.UI.Panels.WebUiSidePanelJS;
    if (sidePanel != null) {
      let sidePanelItems = sidePanel.get_PanelsCollection();
      sidePanelItems.addItem("imageProcessingPanel");

      let processingPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageProcessingPanelJS = items.getItemByRegisteredId("imageProcessingPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageProcessingPanelJS;
      if (processingPanel != null) {
        let imageProcessingHelper = new ImageProcessingHelper(this.modalService, this.__unblockUI);
        Vintasoft.Shared.subscribeToEvent(processingPanel, "settingsButtonClicked", imageProcessingHelper.imageProcessingPanel_settingsButtonClicked);
        Vintasoft.Shared.subscribeToEvent(processingPanel, "processingStarting", imageProcessingHelper.imageProcessingPanel_processingStarting);
        Vintasoft.Shared.subscribeToEvent(processingPanel, "processingFinished", imageProcessingHelper.imageProcessingPanel_processingFinished);
      }
    }

    // get the thumbnail viewer panel of document viewer
    var thumbnailViewerPanel = items.getItemByRegisteredId("thumbnailViewerPanel");
    // if panel is found
    if (thumbnailViewerPanel != null)
      // subscribe to the "actived" event of the thumbnail viewer panel of document viewer
      Vintasoft.Shared.subscribeToEvent(thumbnailViewerPanel, "activated", this.__thumbnailsPanelActivated);
  }

  /**
   Initializes image viewer panel of document viewer.
   @param docViewerSettings Settings of document viewer.
  */
  __initImageViewerPanel(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = docViewerSettings.get_Items();

    // get the image viewer panel
    let imageViewerPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageViewerPanelJS =
      items.getItemByRegisteredId("imageViewerPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageViewerPanelJS;
    // if panel exists
    if (imageViewerPanel != null) {
      let customRotationInImageViewerHelper: CustomRotationInImageViewerHelper = new CustomRotationInImageViewerHelper();
      // add "Custom image rotation" menu to the context menu of image viewer
      customRotationInImageViewerHelper.addCustomImageRotationMenuToImageViewerContextMenu(imageViewerPanel);
    }
  }

  /**
   * Thumbnail viewer panel of document viewer is actived.
   * @param event
   * @param eventArgs
   */
  __thumbnailsPanelActivated(event: any, eventArgs: any) {
    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;

    let thumbnailViewer: Vintasoft.Imaging.UI.WebThumbnailViewerJS = docViewer.get_ThumbnailViewer();
    if (thumbnailViewer != null) {
      // create the progress image
      let progressImage = new Image();
      progressImage.src = "Images/fileUploadProgress.gif";

      // specify that the thumbnail viewer must use the progress image for indicating the thumbnail loading progress
      thumbnailViewer.set_ProgressImage(progressImage);

      // additional bottom space for text with page number under thumbnail
      let textCaptionHeight = 18;
      let padding: any = thumbnailViewer.get_ThumbnailPadding();
      padding[2] += textCaptionHeight
      thumbnailViewer.set_ThumbnailPadding(padding);
      thumbnailViewer.set_DisplayThumbnailCaption(true);
    }
  }



  // === Image viewer events ===

  __imageViewer_focusedIndexChanged() {
    if (_imagingDemoComponent._docViewer == null)
      return;

    // get visual tool of image viewer
    let visualTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS = _imagingDemoComponent._docViewer.get_ImageViewer().get_VisualTool();
    // if visual tool is WebHighlightToolJS and it highlights barcode recognition results
    if (visualTool != null && (visualTool instanceof Vintasoft.Imaging.UI.VisualTools.WebHighlightToolJS)) {
      // clear visual tool in image viewer
      _imagingDemoComponent._docViewer.clearCurrentVisualTool();
    }
  }



  // === Visual Tools ===

  /**
   * Initializes visual tools.
   * @param docViewer The document viewer.
   */
  __initializeVisualTools(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS) {
    let panTool: Vintasoft.Imaging.UI.VisualTools.WebPanToolJS = docViewer.getVisualToolById("PanTool");
    let panCursor = "url('Content/Cursors/CloseHand.cur'), auto";
    panTool.set_Cursor("pointer");
    panTool.set_ActionCursor(panCursor);

    let magnifierTool: Vintasoft.Imaging.UI.VisualTools.WebMagnifierToolJS = docViewer.getVisualToolById("MagnifierTool") as Vintasoft.Imaging.UI.VisualTools.WebMagnifierToolJS;
    let magnifierCursor = "url('Content/Cursors/Magnifier.cur'), auto";
    magnifierTool.set_Cursor(magnifierCursor);

    let zoomTool: Vintasoft.Imaging.UI.VisualTools.WebZoomToolJS = docViewer.getVisualToolById("ZoomTool") as Vintasoft.Imaging.UI.VisualTools.WebZoomToolJS;
    let zoomCursor = "url('Content/Cursors/Zoom.cur'), auto";
    zoomTool.set_Cursor(zoomCursor);
    zoomTool.set_ActionCursor(zoomCursor);

    let zoomSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebZoomSelectionToolJS = docViewer.getVisualToolById("ZoomSelectionTool") as Vintasoft.Imaging.UI.VisualTools.WebZoomSelectionToolJS;
    zoomSelectionTool.set_ActionCursor(zoomCursor);
  }



  // === Document viewer events ===

  /**
   * Warning is occured in document viewer.
   * @param event
   * @param message
   */
  __docViewer_warningOccured(event: any, eventArgs: any) {
    _imagingDemoComponent.__showErrorMessage(eventArgs.message);
  }

  /**
   * Asynchronous operation is started in document viewer.
   * @param event
   * @param data
   */
  __docViewer_asyncOperationStarted(event: object, data: any) {
    // get description of asynchronous operation
    let message: string = data.description;

    // if image is prepared for printing
    if (message === "Image prepared to print") {
      // do not block UI when images are preparing for printing
    }
    else {
      // block UI
      _imagingDemoComponent.__blockUI(data.description);
    }
  }

  /**
   * Asynchronous operation is finished in document viewer.
   * @param event
   * @param data
   */
  __docViewer_asyncOperationFinished(event: object, data: any) {
    // unblock UI
    _imagingDemoComponent.__unblockUI();
  }

  /**
   * Asynchronous operation is failed in document viewer.
   * @param event
   * @param data
   */
  __docViewer_asyncOperationFailed(event: object, data: any) {
    // unblock UI
    _imagingDemoComponent.__unblockUI();

    // get description of asynchronous operation
    let description: string = data.description;
    // get additional information about asynchronous operation
    let additionalInfo: any = data.data;
    // if additional information exists
    if (additionalInfo != null) {
      // show error message
      _imagingDemoComponent.__showErrorMessage(additionalInfo);
    }
    // if additional information does NOT exist
    else {
      // show error message
      _imagingDemoComponent.__showErrorMessage(description + ": unknown error.");
    }
  }



  // === Utils ===

  /**
   * Blocks the UI. 
   * @param text Message that describes why UI is blocked.
   */
  __blockUI(text: string) {
    _imagingDemoComponent._blockUiDialog = new BlockUiDialog(_imagingDemoComponent.modalService);
    _imagingDemoComponent._blockUiDialog.message = text;
    _imagingDemoComponent._blockUiDialog.open();
  }

  /**
   Unblocks the UI.
  */
  __unblockUI() {
    if (_imagingDemoComponent._blockUiDialog != null && _imagingDemoComponent._blockUiDialog !== undefined)
      _imagingDemoComponent._blockUiDialog.close();
  }

  /**
   * Shows an error message.
   * @param data Information about error.
   */
  __showErrorMessage(data: any) {
    _imagingDemoComponent.__unblockUI();

    let dlg: ErrorMessageDialog = new ErrorMessageDialog(_imagingDemoComponent.modalService);
    dlg.errorData = data;
    dlg.open();
  }

}
