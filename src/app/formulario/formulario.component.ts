import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  
  @ViewChild("formName")
  formName!: ElementRef;

  @ViewChild("formCIF")
  formCIF!: ElementRef;

  @ViewChild("formDirection")
  formDirection!: ElementRef;

  @ViewChild("formGroup")
  formGroup!: ElementRef;

  @Output() onGuardar: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
    
  }
 
  ngOnInit() {
  }

  clickGuardar = (): void => {
    let formData: string[] = [];
    console.log(this.formName.nativeElement.value);
    formData.push(this.formName.nativeElement.value);
    formData.push(this.formCIF.nativeElement.value);
    formData.push(this.formDirection.nativeElement.value);
    formData.push(this.formGroup.nativeElement.value);

    let valid: boolean = true;
    for (let i = 0; i < formData.length; i++) {
      if(formData[i].trim() == ""){
        valid = false;
      }
      
    }

    console.log(formData);
    if (valid) {
      this.onGuardar.emit(formData);
    }
  }
}
