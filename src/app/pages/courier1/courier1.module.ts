import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Courier1PageRoutingModule } from './courier1-routing.module';

import { Courier1Page } from './courier1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Courier1PageRoutingModule
  ],
  declarations: [Courier1Page]
})
export class Courier1PageModule {}
