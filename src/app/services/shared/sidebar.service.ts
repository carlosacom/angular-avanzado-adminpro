import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu: Array<any>;
  constructor() {
    this.menu = [
      {
        title: 'Principal',
        icon: 'mdi mdi-gauge',
        submenu: [
          { title: 'Dashboard', url:'/dashboard' },
          { title: 'Barras de Progreso', url:'/progress' },
          { title: 'Gráficas', url:'/charts1' },
        ]
      }
    ];
  }
}
