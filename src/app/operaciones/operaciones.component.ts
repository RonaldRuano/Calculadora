import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  cantidadone = 0;
  cantidadtwo = 0;
  resultado1 = 0;
  resultado2 = 0;
  Operacion = "Suma y Resta se realizan automaticamente al llenar los campos,"+
   " para Multiplicación y División debe presionar los botones";
  opracion1 = "Valores no agregados";
  opracion2 = "Valores no agregados";


  multiplication(){
  let res =  this.resultado1 = (this.cantidadone * this.cantidadtwo);
    console.log(res);
    this.Operacion="Multiplicación realizada"
  }

  Divicion(){
    let res =  this.resultado2 = (this.cantidadone / this.cantidadtwo);
      console.log(res);
      this.Operacion="División realizada"
    }

  ingresar(event : Event){
    this.opracion2=(<HTMLInputElement>event.target).value

  }
  ingresar2(event : Event){
    this.opracion1=(<HTMLInputElement>event.target).value

  }
  limpiar(){
    this.cantidadtwo = 0;
    this.cantidadone = 0;
    this.opracion2 = "Valores no agregados";
    this.opracion1 = "Valores no agregados";
    this.Operacion = "Suma y Resta se realizan automaticamente al llenar los campos,"+
   " para Multiplicación y División debe presionar los botones";
   this.resultado1 = 0;
   this.resultado2 = 0;
  }


  constructor() {
    setTimeout(()=>{
      this.habilitar = false
    },10000);
  }

  ngOnInit(): void {
  }
  habilitar = true;


}
