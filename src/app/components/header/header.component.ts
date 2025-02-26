import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class HeaderComponent {

  @Input()
  public backButton: boolean = false;

  constructor() { }

  protected hasAnyButton() {
    return this.backButton;
  }

}
