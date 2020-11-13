import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReviewComponent } from '../../components/balance/review/review.component';
import { IconsModule } from '../../icons/icons.module';
import { VersionPageRoutingModule } from './version-routing.module';
import { VersionPage } from './version.page';

@NgModule({
  imports: [
    IconsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VersionPageRoutingModule
  ],
  declarations: [VersionPage, ReviewComponent]
})
export class VersionPageModule { }
