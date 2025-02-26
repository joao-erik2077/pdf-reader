import { Component, OnInit } from '@angular/core';
import { PdfViewerService } from '../services/pdf/pdf-viewer.service';
import { Pdf } from '../utils/Pdf';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.page.html',
  styleUrls: ['./pdf-viewer.page.scss'],
  standalone: false,
})
export class PdfViewerPage implements OnInit {
  public file: Pdf | undefined;

  constructor(private pdfViewerService: PdfViewerService) { }

  async ngOnInit() {
    this.file = await this.pdfViewerService.getCurrentPdf();
  }

}
