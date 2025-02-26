import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Pdf } from 'src/app/utils/Pdf';
import { PdfViewerService } from '../../services/pdf/pdf-viewer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-item',
  templateUrl: './pdf-item.component.html',
  styleUrls: ['./pdf-item.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class PdfItemComponent {
  @Input()
  public file!: Pdf;

  constructor(
    private pdfViewerService: PdfViewerService,
    private router: Router
  ) { }

  public async showPdfFile(pdf: Pdf) {
    await this.pdfViewerService.setCurrentPdf(pdf);
    await this.router.navigate(['/pdf-viewer']);
  }
}
