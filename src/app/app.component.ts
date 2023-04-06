import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Carteirinha', url: '/vacinas', icon: 'mail' },
    { title: 'Diário', url: '/diario', icon: 'paper-plane' },
    { title: 'Rede Social', url: '/folder/Favorites', icon: 'globe' },
    { title: 'Chat', url: '/folder/Archived', icon: 'archive' },
  ];
  public labels = [
    { label: 'Família', url:'/anotacoes'}
  ];
  constructor() {}
}
