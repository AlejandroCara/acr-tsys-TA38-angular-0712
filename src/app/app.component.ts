import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormularioComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TA38';
  
  @ViewChild(ListaComponent, {static : true}) listaComponent: ListaComponent | undefined;

  ngOnInit() {
  }

  addNewRow(formData: string[]){
    console.log("Parend addNewRow");
    this.listaComponent?.addInRow(formData);
  }
}
