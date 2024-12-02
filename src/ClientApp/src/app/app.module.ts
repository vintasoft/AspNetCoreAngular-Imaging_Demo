import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ImagingDemoComponent } from './imaging-demo/imaging-demo';

import { ErrorMessageDialogContent, ErrorMessageDialog } from './dialogs/error-message-dialog';
import { BlockUiDialog, BlockUiDialogContent } from './dialogs/block-ui-dialog';

@NgModule({
  declarations: [
    AppComponent,
    ImagingDemoComponent,
    ErrorMessageDialogContent,
    ErrorMessageDialog,
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
