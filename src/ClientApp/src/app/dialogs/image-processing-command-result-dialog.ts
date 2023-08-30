import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'image-processing-command-result-dialog-content',
  templateUrl: './image-processing-command-result-dialog.html'
})
export class ImageProcessingCommandResultDialogContent {

  public imageProcessingCommandResult: object | null = null;


  constructor(public activeModal: NgbActiveModal) {
  }


  /**
   * OnInit event occurs.
   */
  ngOnInit() {
    if (this.imageProcessingCommandResult == null)
      return;

    // create WebPropertyGridJS object for imageProcessingCommand
    let imageProcessingCommandPropertyGrid: Vintasoft.Shared.WebPropertyGridJS = new Vintasoft.Shared.WebPropertyGridJS(this.imageProcessingCommandResult);
    // create PropertyGridControlJS
    let imageProcessingCommandPropertyGridControl: PropertyGridControlJS = new PropertyGridControlJS(imageProcessingCommandPropertyGrid, "imageProcessingCommandResultPropertyGrid", { hideNestedElements: false, showReadOnlyElements: false });
    imageProcessingCommandPropertyGridControl.createMarkup();
  }

  /**
   * Closes the dialog.
   */
  public closeDialog() {
    this.activeModal.close();
  }

}


@Component({
  selector: 'image-processing-command-result-dialog',
  templateUrl: './image-processing-command-result-dialog.html'
})
export class ImageProcessingCommandResultDialog {

  public imageProcessingCommandResult: object | null = null;
  private _modalReference: NgbModalRef | null = null;


  constructor(private modalService: NgbModal) {
  }


  public open() {
    this._modalReference = this.modalService.open(ImageProcessingCommandResultDialogContent);
    this._modalReference.componentInstance.imageProcessingCommandResult = this.imageProcessingCommandResult;
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
