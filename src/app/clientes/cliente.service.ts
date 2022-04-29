import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private clientes: Cliente[] = [];
  private listaClientesAtualizada = new Subject<Cliente[]>();

  getClientes(): void {
    //return [...this.clientes];
    this.httpClient.get<{mensagem: string, clientes: Cliente[]}>
    ('http://localhost:3000/api/clientes').subscribe(
      (dados) => {
        this.clientes = dados.clientes;
        this.listaClientesAtualizada.next([...this.clientes]);
      }
    )
  }

  getListaDeClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }

  adicionarCliente(nome: string, fone: string, email: string) {
    const cliente: Cliente = {
      nome: nome,
      fone: fone,
      email: email,
    };
    this.clientes.push(cliente);
    this.listaClientesAtualizada.next([...this.clientes]);
  }
  constructor (private httpClient: HttpClient) {

  }
}
