import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
      private _settings: SettingsService
    ) { }

  ngOnInit() {
    this.setCheck();
  }
  changeColor(color: string, link: any) {
    this.check(link);
    this._settings.setTheme(color);
  }
  check(link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  setCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;
    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') == theme) {
        ref.classList.add('working');
        return;
      }
    }
  }
}
