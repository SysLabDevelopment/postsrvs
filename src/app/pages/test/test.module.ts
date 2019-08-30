import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TestPage } from './test.page';
import { ScrollingModule } from '@angular/cdk/scrolling';


const routes: Routes = [
  {
    path: '',
    component: TestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestPage]
})
export class TestPageModule {}
