import { Component, OnInit } from '@angular/core';
import { NavController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public fGroup: FormGroup;

  public user = {
    email: '',
    password: ''
  };

  constructor( private navegacao: NavController, private fBuilder: FormBuilder ) {
    this.fGroup = this.fBuilder.group({
      'email': [this.user.email, Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)
      ])],
      'password': [this.user.password, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])]
    });
  }

  ngOnInit() {
  }

  register() {
    this.navegacao.navigateForward('register');
  }

  dashboard() {
    this.navegacao.navigateForward('dashbord');
  }
}
