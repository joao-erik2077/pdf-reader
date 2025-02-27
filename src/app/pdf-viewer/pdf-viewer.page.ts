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
  public currentPage: number = 1;
  public totalPages: number[] = [1];

  constructor(private pdfViewerService: PdfViewerService) { }

  async ngOnInit() {
    this.file = await this.pdfViewerService.getCurrentPdf();
    const generateArray = (n: number): number[] =>
      Array.from({ length: n }, (_, i) => i + 1);
    if (this.file) this.totalPages = generateArray(this.file?.totalPages);
  }

  public changePage(value: number) {
    this.currentPage = value;
  }
}
