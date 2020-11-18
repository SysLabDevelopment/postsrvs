import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AngularSplitModule } from 'angular-split';
import { IconsModule } from '../../icons/icons.module';
// import { GoogleMaps, Polygon } from '@ionic-native/google-maps';
import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  }
];

@NgModule({
  imports: [
    IconsModule,
    AngularSplitModule.forRoot(),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [MapPage],
  bootstrap: []
})
export class MapPageModule { }
