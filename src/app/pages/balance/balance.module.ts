import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { ReviewComponent } from '../../components/balance/review/review.component';
import { BalancePage } from './balance.page';

const routes: Routes = [
  {
    path: '',
    component: BalancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalancePage, ReviewComponent]
})
export class BalancePageModule {}
