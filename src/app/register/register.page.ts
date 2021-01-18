import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public fGroup: FormGroup;

  public user = {
    nome: '',
    email: '',
    password: ''
  };

  constructor( private fBuilder: FormBuilder) { 
    this.fGroup = this.fBuilder.group({
      'nome': [this.user.nome, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])],
      'email': [this.user.email, Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)
      ])],
      'password': [this.user.password, Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }
  
  signUp() {
    alert('Cadastrado realizado com sucesso!');
    console.log(this.fGroup.value);
  }
}
