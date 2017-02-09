import { Component, OnInit, Input } from '@angular/core';

import {Agendamento, StatusAgendamento} from '../model/agendamento';

@Component({
  selector: 'app-lista-horarios',
  templateUrl: './lista-horarios.component.html',
  styleUrls: ['./lista-horarios.component.css']
})
export class ListaHorariosComponent implements OnInit {

  agendamentos:Agendamento[];

  constructor() { 
    this.agendamentos = [];
  }

  pintarHorario():string{
    return " teal lighten-2" ;
  }

  ngOnInit() {
    for(let i = 8; i < 18; i++){
      let agendamento = new Agendamento();
      agendamento.horario = i+":00";
      agendamento.nomeCliente = "Vago";
      agendamento.telefone = "()____-_____";
      agendamento.status = StatusAgendamento.LIVRE;
      this.agendamentos.push(agendamento);
    }
    this.agendamentos[1].status = StatusAgendamento.OCUPADO;
    this.agendamentos[1].nomeCliente = "Raul Mops";
    this.agendamentos[4].status = StatusAgendamento.DESLIGADO;


  }

}
