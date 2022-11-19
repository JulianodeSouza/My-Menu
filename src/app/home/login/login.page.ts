import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { ToastsService } from 'src/app/core/services/toasts/toasts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private cToastService: ToastsService,
    private cRouter: Router
  ) { }

  ngOnInit() {
  }

  // realiza login
  public login() {

  }

  // redireciona para o cadastro
  public cadastro() {
    this.cRouter.navigateByUrl('cadastro');
  }
}
