import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Courier1Page } from './courier1.page';

const routes: Routes = [
  {
    path: '',
    component: Courier1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Courier1PageRoutingModule {}
