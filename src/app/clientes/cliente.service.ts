import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private clientes: Cliente[] = [];
  private listaClientesAtualizada = new Subject<Cliente[]>();

  getClientes(): void {
    this.httpClient.get <{mensagem: string, clientes: any}>('http://localhost:3000/api/clientes')
    .pipe(map((dados) => {
      return dados.clientes.map((cliente: { _id: any; nome: any; fone: any; email: any; }) => {
        return {
          id: cliente._id,
          nome: cliente.nome,
          fone: cliente.fone,
          email: cliente.email
        }
      })
    }))
      .subscribe(
        (clientes) => {
          this.clientes = clientes;
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
      id:''
    };
    this.httpClient.post<{ mensagem: string }>('http://localhost:3000/api/clientes',
      cliente).subscribe(
        (dados) => {
          console.log(dados.mensagem);
          this.clientes.push(cliente);
          this.listaClientesAtualizada.next([...this.clientes]);
        }
      )
  }

  removerCliente(id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/clientes/${id}`)
    .subscribe(() => {
      this.clientes = this.clientes.filter((cli) => {
        return cli.id !== id
      });
      this.listaClientesAtualizada.next([...this.clientes]);
    });
  }
  constructor(private httpClient: HttpClient) {

  }
}
