import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { TelefonoPipe } from '../../pipes/telefono.pipe';

@Component({
  selector: 'cliente-list',
  standalone: true,
  imports: [CommonModule,TelefonoPipe],
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],

})
export class ClienteListComponent implements OnInit {
  clientes: any[] = [];
  pageNumber = 1;
  pageSize = 10;
  moredatos:boolean = true; 

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClientes(this.pageNumber, this.pageSize).subscribe(data => {
      this.clientes = data;
      this.moredatos = data.length === this.pageSize;
    });
  }
  nextPage(): void {
    this.pageNumber++;
    this.loadClientes();
  }

  prevPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.loadClientes();
    }
  }
}