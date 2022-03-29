import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intibiome';

  public icone = "menu";
  public menu = "closed"

  openMenu() {
    this.icone = "close"
    this.menu = "open"
  }

  closeMenu() {
    this.icone = "menu"
    this.menu = "closed"
  }
}
