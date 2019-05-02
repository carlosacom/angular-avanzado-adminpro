import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public settings: Settings;
  constructor(
    @Inject(DOCUMENT) private _document,
  ) {
    this.settings = {
      url: './assets/css/colors/default-dark.css',
      theme: 'default-dark'
    };
    this.loadSettings();
  }
  saveSettings () {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
  loadSettings () {
    this.settings = (localStorage.getItem('settings')) ? JSON.parse(localStorage.getItem('settings')) : this.settings ;
    this.setTheme(this.settings.theme);
  }
  setTheme (color: string) {
    const url = `./assets/css/colors/${color}.css`;
    this._document.getElementById('theme').setAttribute('href',url);
    this.settings.theme = color;
    this.settings.url = url;
    this.saveSettings();
  }
}
interface Settings {
  url: string;
  theme: string;
}
