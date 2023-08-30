import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ImagingDemoComponent } from './imaging-demo/imaging-demo';

import { ImageViewerSettingsDialog, ImageViewerSettingsDialogContent } from './dialogs/image-viewer-settings-dialog';
import { ErrorMessageDialogContent, ErrorMessageDialog } from './dialogs/error-message-dialog';
import { ImageProcessingCommandSettingsDialog, ImageProcessingCommandSettingsDialogContent } from './dialogs/image-processing-command-settings-dialog';
import { ImageProcessingCommandResultDialog, ImageProcessingCommandResultDialogContent } from './dialogs/image-processing-command-result-dialog';
import { BlockUiDialog, BlockUiDialogContent } from './dialogs/block-ui-dialog';

@NgModule({
  declarations: [
    AppComponent,
    ImagingDemoComponent,
    ImageViewerSettingsDialog,
    ImageViewerSettingsDialogContent,
    ErrorMessageDialogContent,
    ErrorMessageDialog,
    ImageProcessingCommandSettingsDialog,
    ImageProcessingCommandSettingsDialogContent,
    ImageProcessingCommandResultDialog,
    ImageProcessingCommandResultDialogContent,
    BlockUiDialog,
    BlockUiDialogContent
  ],
  entryComponents: [
    ImageViewerSettingsDialog,
    ImageViewerSettingsDialogContent,
    ErrorMessageDialogContent,
    ErrorMessageDialog,
    ImageProcessingCommandSettingsDialog,
    ImageProcessingCommandSettingsDialogContent,
    ImageProcessingCommandResultDialog,
    ImageProcessingCommandResultDialogContent,
    BlockUiDialog,
    BlockUiDialogContent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ImagingDemoComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
