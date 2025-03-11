import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfViewerService } from '../services/pdf/pdf-viewer.service';
import { Pdf } from '../utils/Pdf';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

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

  @ViewChild(PdfViewerComponent)
  private pdfComponent!: PdfViewerComponent;

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

  public async search(value: any) {
    const matches = await this.pdfComponent.eventBus.dispatch('find', {
      query: value, caseSensitive: false, findPrevious: true, highlightAll: true, phraseSearch: false, index: 2
    });

    console.log(matches)
  }
}
