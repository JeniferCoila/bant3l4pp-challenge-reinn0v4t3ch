import { Component } from '@angular/core';
import { AdminPresenter } from './admin.presenter';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ AdminPresenter ]
})

export class AdminComponent {
  display: boolean = false;
  items: MenuItem[];

  constructor(public presenter: AdminPresenter) { }

  ngOnInit() {
    this.items = [
        {
            label:'',
            icon:''
        },
        {
            label:'Documentos por cobrar',
            icon:'pi pi-fw pi-file'
        },
        {
            label:'Comprobantes',
            icon:'pi pi-fw pi-file',
        },
        {
            label:'Mi perfil',
            icon:'pi pi-fw pi-user'
        },
        {
            label:'Cerrar sesión',
            icon:'pi pi-fw pi-power-off',
            target: '(click)="presenter.closeSession()"'
        }
    ];
}

}
