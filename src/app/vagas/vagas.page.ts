import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss'],
})
export class VagasPage implements OnInit {

  constructor( private navegacao: NavController) { }

  ngOnInit() {
  }

  inscricao() {
    alert('Inscrição realizada!');
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
