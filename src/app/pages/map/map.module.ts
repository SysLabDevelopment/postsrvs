import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GoogleMaps, Polygon } from '@ionic-native/google-maps';
import { MapPage } from './map.page';
import { AngularSplitModule } from 'angular-split';
const routes: Routes = [
  {
    path: '',
    component: MapPage
  }
];

@NgModule({
  imports: [
    AngularSplitModule.forRoot(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [GoogleMaps],
  declarations: [MapPage],
  bootstrap: []
})
export class MapPageModule { }
