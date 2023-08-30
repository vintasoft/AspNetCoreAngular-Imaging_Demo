import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'image-processing-command-settings-dialog-content',
  templateUrl: './image-processing-command-settings-dialog.html'
})
export class ImageProcessingCommandSettingsDialogContent {

  public imageProcessingCommand: Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS | null = null;


  constructor(public activeModal: NgbActiveModal) {
  }


  /**
   OnInit event occurs.
  */
  ngOnInit() {
    if (this.imageProcessingCommand == null)
      return;

    // create WebPropertyGridJS object for imageProcessingCommand
    let imageProcessingCommandPropertyGrid: Vintasoft.Shared.WebPropertyGridJS = new Vintasoft.Shared.WebPropertyGridJS(this.imageProcessingCommand);
    // create PropertyGridControlJS
    let imageProcessingCommandPropertyGridControl: PropertyGridControlJS = new PropertyGridControlJS(imageProcessingCommandPropertyGrid, "imageProcessingCommandSettingsPropertyGrid", { hideNestedElements: false, showReadOnlyElements: false });
    imageProcessingCommandPropertyGridControl.createMarkup();
  }

  /**
   Closes the dialog.
  */
  public closeDialog() {
    this.activeModal.close();
  }

}


@Component({
  selector: 'image-processing-command-settings-dialog',
  templateUrl: './image-processing-command-settings-dialog.html'
})
export class ImageProcessingCommandSettingsDialog {

  public imageProcessingCommand: Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS | null = null;
  private _modalReference: NgbModalRef | null = null;


  constructor(private modalService: NgbModal) {
  }


  public open() {
    this._modalReference = this.modalService.open(ImageProcessingCommandSettingsDialogContent);
    this._modalReference.componentInstance.imageProcessingCommand = this.imageProcessingCommand;
  }

  /**
   Closes the dialog.
  */
  public closeDialog() {
    if (this._modalReference != null) {
      this._modalReference.componentInstance.closeDialog();
    }
  }

}
