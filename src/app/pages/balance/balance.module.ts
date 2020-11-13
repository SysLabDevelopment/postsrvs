import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IconsModule } from '../../icons/icons.module';
import { BalancePage } from './balance.page';
const routes: Routes = [
  {
    path: '',
    component: BalancePage
  }
];

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalancePage]
})
export class BalancePageModule { }
