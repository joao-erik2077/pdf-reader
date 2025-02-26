import { Injectable } from '@angular/core';
import { Pdf } from 'src/app/utils/Pdf';

@Injectable({
  providedIn: 'root'
})
export class PdfViewerService {

  private currentPdfFile: Pdf | undefined = {
    name: 'test 1',
    path: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
    totalPages: 3
  };

  constructor() { }

  public async setCurrentPdf(pdf: Pdf) {
    return this.currentPdfFile = pdf;
  }

  public async getCurrentPdf() {
    return this.currentPdfFile;
  }
}
