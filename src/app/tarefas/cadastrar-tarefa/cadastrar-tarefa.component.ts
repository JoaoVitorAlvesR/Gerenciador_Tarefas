import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css'],
})
export class CadastrarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;
  constructor(private tarefasService: TarefaService, private router: Router) {}

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefasService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
