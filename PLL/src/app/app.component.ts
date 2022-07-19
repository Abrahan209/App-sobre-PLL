import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/inicio', icon: 'home' },
    { title: 'Personajes', url: '/personajes', icon: 'person' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'information-circle' },
    { title: 'Momentos', url: '/momentos', icon: 'archive' },
    { title: 'Contactame', url: '/contactame', icon: 'id-card' },
    { title: 'En mi vida', url: '/mivida', icon: 'star' },
  ];
  constructor() {}
}
