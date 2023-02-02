import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from'@angular/forms'
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {
formularioLogin:FormGroup; 
constructor(){
  let controles: any ={
    nombre: new FormControl('',[]),
    correo:new FormControl('',[Validators.required,Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')]),
    contrasena:new FormControl('', [Validators.minLength(6),Validators.required]),
    recordarCredenciales:new FormControl(true)
  }
  this.formularioLogin = new FormGroup(controles)
}
  login(){
    console.log(this.formularioLogin);
    if(this.formularioLogin.controls['correo'].errors?.['pattern']){
      console.log("hubo un error en el formato del correo")
    }
    if(this.formularioLogin.controls['correo'].errors?.['required']){
      console.log("hubo un error en el formato del correo")
    }
  }
}

