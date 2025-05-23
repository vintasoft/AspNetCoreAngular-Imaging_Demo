import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ErrorMessageDialog } from "../dialogs/error-message-dialog";
import { BlockUiDialog } from '../dialogs/block-ui-dialog';
import { OpenFileHelper } from './open-file-helper';
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

      // create the document viewer settings
      let docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer", "documentViewer");
      // enable image uploading from URL
      docViewerSettings.set_CanUploadImageFromUrl(true);
      // specify that document viewer should show "Export and download file" button instead of "Download file" button
      docViewerSettings.set_CanExportAndDownloadFile(true);
      docViewerSettings.set_CanDownloadFile(false);
      docViewerSettings.set_CanAddFile(true);
      docViewerSettings.set_CanClearSessionCache(true);

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

      // subscribe to the thumbnailsDeleting event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "thumbnailsDeleting", this.__docViewer_thumbnailsDeleting);

      // get the thumbnail viewer of document viewer
      let thumbnailViewer1: Vintasoft.Imaging.UI.WebThumbnailViewerJS = this._docViewer.get_ThumbnailViewer();
      thumbnailViewer1.set_CanDragThumbnails(true);
      thumbnailViewer1.set_CanNavigateThumbnailsUsingKeyboard(true);
      thumbnailViewer1.set_CanSelectThumbnailsUsingKeyboard(true);
      thumbnailViewer1.set_CanDeleteThumbnailsUsingKeyboard(true);

      // get the thumbnail viewer panel
      let thumbnailViewerPanel: Vintasoft.Imaging.UI.Panels.WebUiThumbnailViewerPanelJS
        = this._docViewer.get_Items().getItemByRegisteredId("thumbnailViewerPanel") as Vintasoft.Imaging.UI.Panels.WebUiThumbnailViewerPanelJS;
      // specify that thumbnail viewer should have context menu that allows to delete thumbnails
      thumbnailViewerPanel.set_CanDeleteThumbnailsUsingContextMenu(true);

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



  // === Init UI ===

  /**
   * Initializes main menu of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initMenu(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = docViewerSettings.get_Items();


    let uploadAndOpenFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = items.getItemByRegisteredId("uploadAndOpenFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadAndOpenFileButton != null)
      uploadAndOpenFileButton.set_FileExtensionFilter(".bmp, .emf, .gif, .ico, .cur, .jpg, .jpeg, .jls, .pcx, .png, .tif, .tiff, .svg, .wmf, .jb2, .jbig2, .jp2, .j2k, .j2c, .jpc, .cr2, .crw, .nef, .nrw, .dng, .dcm, .dic, .acr, .pdf");

    let uploadAndAddFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = items.getItemByRegisteredId("uploadAndAddFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadAndAddFileButton != null)
      uploadAndAddFileButton.set_FileExtensionFilter(".bmp, .emf, .gif, .ico, .cur, .jpg, .jpeg, .jls, .pcx, .png, .tif, .tiff, .svg, .wmf, .jb2, .jbig2, .jp2, .j2k, .j2c, .jpc, .cr2, .crw, .nef, .nrw, .dng, .dcm, .dic, .acr, .pdf");
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

      let processingPanel: Vintasoft.Imaging.UI.Panels.WebUiImageProcessingPanelJS = items.getItemByRegisteredId("imageProcessingPanel") as Vintasoft.Imaging.UI.Panels.WebUiImageProcessingPanelJS;
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
    let imageViewerPanel: Vintasoft.Imaging.UI.Panels.WebUiImageViewerPanelJS =
      items.getItemByRegisteredId("imageViewerPanel") as Vintasoft.Imaging.UI.Panels.WebUiImageViewerPanelJS;
    // if panel exists
    if (imageViewerPanel != null) {
      // enable ability to set custom image rotation
      imageViewerPanel.set_CanSetCustomViewRotationUsingContextMenu(true);
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

  __docViewer_thumbnailsDeleting(event: any, eventArgs: any) {
    if (_imagingDemoComponent._docViewer == null)
      return;

    // reset the active visual tool in image viewer
    _imagingDemoComponent._docViewer.get_ImageViewer().get_VisualTool().reset();

    var message;
    if (eventArgs.indexes.length == 1)
      message = "Do you want to remove thumbnail?";
    else
      message = "Do you want to remove thumbnails?";

    if (!confirm(message)) {
      eventArgs.cancel = true;
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
