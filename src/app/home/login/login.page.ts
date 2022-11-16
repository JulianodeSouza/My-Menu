import { Component, OnInit } from '@angular/core';

// Service
import { ToastsService } from 'src/app/services/Toast/toasts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private cToastService: ToastsService) { }

  ngOnInit() {
  }
}
