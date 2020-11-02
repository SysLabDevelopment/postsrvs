import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IntroJsModule } from '@esfaenza/ngx-introjs';
import { IonicModule } from '@ionic/angular';
import { IconsModule } from '../../icons/icons.module';
import { OrderPage } from './order.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPage
  }
];

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IntroJsModule
  ],
  declarations: [OrderPage]
})
export class OrderPageModule { }
