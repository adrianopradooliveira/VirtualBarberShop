export enum StatusAgendamento{
    LIVRE,
    OCUPADO,
    DESLIGADO
}

export class Agendamento{
    horario:string;
    nomeCliente:String;
    telefone:string;
    status:StatusAgendamento;
}