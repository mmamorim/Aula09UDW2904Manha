import { Component } from '@angular/core';
import { Cliente } from './clientes/cliente.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula06udw0104';
  clientes: Cliente[] = [];
  onClienteAdicionado(cliente: Cliente) {
    //console.log(cliente);
    //this.clientes[...this.clientes, cliente];
  }
}
