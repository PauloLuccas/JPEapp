import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculoPageRoutingModule } from './curriculo-routing.module';

import { CurriculoPage } from './curriculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CurriculoPage]
})
export class CurriculoPageModule {}
