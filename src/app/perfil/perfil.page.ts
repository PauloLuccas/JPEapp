import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor( private navegacao: NavController) { }

  ngOnInit() {
  }

  baixar() {
    alert('baixando')
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
