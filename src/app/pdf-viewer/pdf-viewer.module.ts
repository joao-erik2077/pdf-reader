import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfViewerPageRoutingModule } from './pdf-viewer-routing.module';

import { PdfViewerPage } from './pdf-viewer.page';
import { HeaderComponent } from '../components/header/header.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerPageRoutingModule,
    HeaderComponent,
    PdfViewerModule
  ],
  declarations: [PdfViewerPage]
})
export class PdfViewerPageModule { }
