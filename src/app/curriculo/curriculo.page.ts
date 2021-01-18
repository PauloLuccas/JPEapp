import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.page.html',
  styleUrls: ['./curriculo.page.scss'],
})
export class CurriculoPage implements OnInit {

  public fGroup: FormGroup;

  public user = {
    nome: '',
    email: '',
    idade: '',
    cpf: '',
    celular: ''
  }

  constructor(private fBuilder: FormBuilder, private navegacao: NavController) {
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
      'idade': [this.user.idade, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ])],
      'cpf': [this.user.cpf, Validators.compose([
        Validators.required,
        Validators.minLength(12)
      ])],
      'celular': [this.user.celular, Validators.compose([
        Validators.required,
        Validators.minLength(11)
      ])]
    });
  }

  ngOnInit() {
  }

  enviar() {
    alert('Enviado');
    console.log(this.fGroup.value);
  }

  inicio() {
    this.navegacao.navigateForward('dashbord');
  }

  curriculo() {
    this.navegacao.navigateForward('curriculo');
  }

  perfil() {
    this.navegacao.navigateForward('perfil');
  }

}
