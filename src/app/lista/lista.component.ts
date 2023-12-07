import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  rows: string[][] = [];

  addInRow(inRow: string[]){
    console.log("Row added");
    this.rows.push(inRow);
  }
}
