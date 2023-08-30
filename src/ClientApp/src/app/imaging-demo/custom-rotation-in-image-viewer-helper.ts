let _customRotationInImageViewerHelper: CustomRotationInImageViewerHelper;

/**
 * A helper that helps to create UI for custom image rotation in image viewer.
 */
export class CustomRotationInImageViewerHelper {

  _imageViewerContextMenu: Vintasoft.Imaging.UI.UIElements.WebUiContextMenuJS | null = null;



  constructor() {
    _customRotationInImageViewerHelper = this;
  }



  /**
   * Adds "Custom image rotation" menu to the context menu of image viewer.
   */
  addCustomImageRotationMenuToImageViewerContextMenu(imageViewerPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageViewerPanelJS) {
    let contextMenuItems: Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS[] = [];
    // add "Apply custom rotation (90 degree clockwise) to image" button to the context menu
    contextMenuItems.push(this.__createApplyCustomImageRotationButton());
    // add "Reset custom image rotation" button to the context menu
    contextMenuItems.push(this.__createResetCustomImageRotationButton());

    // create the context menu for image viewer
    this._imageViewerContextMenu = new Vintasoft.Imaging.UI.UIElements.WebUiContextMenuJS(contextMenuItems);

    // set the annotation context menu as the context menu of image viewer
    imageViewerPanel.set_ContextMenu(this._imageViewerContextMenu);
  }

  /**
   * Creates "Apply custom rotation (90 degree clockwise) to image" button for context menu.
   */
  __createApplyCustomImageRotationButton(): Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {
    // create "Apply custom rotation to image" label
    let rotateImageClockwiseLabel: Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS =
      new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: "Apply custom rotation (90 degree clockwise) to image", localizationId: "applyCustomImageRotation" });
    // create and return "Apply custom rotation (90 degree clockwise) to image" button
    return new Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS([rotateImageClockwiseLabel], {
      cssClass: "subMenu",
      onClick: { callback: this.__rotateImageClockwiseButton_clicked, data: rotateImageClockwiseLabel }
    });
  }

  /**
   * "Apply custom rotation (90 degree clockwise) to image" button is clicked.
   * @param {any} event Event.
   * @param {any} uiElement "Apply custom rotation (90 degree clockwise) to image" label.
   */
  __rotateImageClockwiseButton_clicked(event: object, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();
    let focusedImageIndex: number = imageViewer.get_FocusedIndex();
    // if image viewer has focused image
    if (focusedImageIndex != -1) {
      // get custom rotation angle for focused image
      let focusedImageRotationAngle: number = imageViewer.getCustomImageRotationAngle(focusedImageIndex);
      // if focused image does not have custom rotation angle
      if (focusedImageRotationAngle == -1)
        // use rotate angle for all images as custom rotation angle for focused image
        focusedImageRotationAngle = imageViewer.get_ImageRotationAngle();

      // set custom rotation for focused image
      imageViewer.setCustomImageRotationAngle(focusedImageIndex, focusedImageRotationAngle + 90);

      if (_customRotationInImageViewerHelper._imageViewerContextMenu != null) {
        // hide the context menu of image viewer
        _customRotationInImageViewerHelper._imageViewerContextMenu.hide();
      }
    }
  }

  /**
   * Creates "Reset custom image rotation" button for context menu.
   */
  __createResetCustomImageRotationButton(): Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {
    // create "Reset custom image rotation" label
    let resetCustomImageRotationLabel: Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS =
      new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: "Reset custom image rotation", localizationId: "resetCustomImageRotation" });
    // create and return "Reset custom image rotation" button
    return new Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS([resetCustomImageRotationLabel], {
      cssClass: "subMenu",
      onClick: { callback: this.__resetCustomImageRotationButton_clicked, data: resetCustomImageRotationLabel }
    });
  }

  /**
   * "Reset custom image rotation" button is clicked.
   * @param {any} event Event.
   * @param {any} uiElement "Reset custom image rotation" label.
   */
  __resetCustomImageRotationButton_clicked(event: object, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();
    let focusedImageIndex: number = imageViewer.get_FocusedIndex();
    // if image viewer has focused image
    if (focusedImageIndex != -1) {
      // reset custom rotation for focused image
      imageViewer.resetCustomImageRotationAngle(focusedImageIndex);

      if (_customRotationInImageViewerHelper._imageViewerContextMenu != null) {
        // hide the context menu of image viewer
        _customRotationInImageViewerHelper._imageViewerContextMenu.hide();
      }
    }
  }

}
