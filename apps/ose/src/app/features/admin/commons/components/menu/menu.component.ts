import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-option.interface';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() name: string;
  @Input() options: MenuOption[] = [];
  display: boolean = false;
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label:'Home',
            icon:'',
            routerLink: '/'
        },
        {
            label:'Documentos por cobrar',
            icon:'pi pi-fw pi-file',
            routerLink: 'documents'
        },
        {
            label:'Comprobantes',
            icon:'pi pi-fw pi-file',
            routerLink: 'payments'
        },
        {
            label:'Mi perfil',
            icon:'pi pi-fw pi-user',
            routerLink: 'mypage'
        },
        {
            label:'Cerrar sesión',
            icon:'pi pi-fw pi-power-off',
            target: '(click)="presenter.closeSession()"'
        }
    ];
    }

}
