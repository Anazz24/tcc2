import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TexAnot } from '../models/TexAnot';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {

  formAnotacoes: FormGroup;
  texAnot: TexAnot = new TexAnot();

  mensagens = {
    titulo: [
      { tipo: 'required', mensagem: 'Dê um Título para sua anotação.'},
    ],
    texto: [
      { tipo: 'required', mensagem: 'Escreva uma Anotação.'},
    ],
  };

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formAnotacoes = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required])],
      texto: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
  }

  async salvarAnotacao() {
    if(this.formAnotacoes.valid){
      this.texAnot.titulo = this.formAnotacoes.value.titulo;
----------------------------------------------------
      this.route.navigateByUrl('/tabs/tab1');
    }else{
      alert('Formulário Inválido!');
    }
    }

}
