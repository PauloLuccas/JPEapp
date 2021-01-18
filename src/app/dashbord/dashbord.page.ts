import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage implements OnInit {

  constructor( private navegacao: NavController) { }

  ngOnInit() {
  }

  maisVagas() {
    this.navegacao.navigateForward('vagas');
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
