import { Component } from '@angular/core';
import { Pdf } from '../utils/Pdf';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public pdfFiles: Pdf[] = [
    {
      name: 'test 1',
      path: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      totalPages: 3
    },
    {
      name: 'test 2',
      path: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      totalPages: 3
    },
    {
      name: 'test 3',
      path: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      totalPages: 3
    },
  ]

  constructor() { }

}
