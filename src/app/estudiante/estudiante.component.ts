import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  NombrePersona = "Ronald Josué"
  ApellidoPersona = "Ruano Vicente"
  Carnet = "0907-18-7064"
  Docente = "Ing. Carlos Hernández"
  Parcial = "Segundo Examen Parcial Desarrollo Web"
  Fecha = "Septiembre de 2021"

}
