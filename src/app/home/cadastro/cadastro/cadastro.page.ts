import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErroUserForm, UserForm } from 'src/app/core/models/usuario-form.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  // Variaveis de formulario
  public iForm: UserForm;
  public iErro: ErroUserForm;

  constructor(
    private cRouter: Router
  ) {
    this.init();
  }

  // Funcao de inicializacao
  public init() {
    this.iForm = {
      name: '',
      email: '',
      password: '',
      password_repeat: ''
    }

    this.iErro = {
      name: {},
      email: {},
      password: {},
      password_repeat: {}
    }
  }


  // Funcao para salvar o cadastro
  public realizaCadastro() {
    //  Criptografar senha com btoa e compara-las o campo de senha e repetir senha para validações

   
  }

  public voltar() {
    this.cRouter.navigateByUrl('');
  }
}
