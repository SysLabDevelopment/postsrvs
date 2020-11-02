import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IntroJsModule } from '@esfaenza/ngx-introjs';
import { IonicModule } from '@ionic/angular';
import { IconsModule } from '../../icons/icons.module';
import { CourierPage } from './courier.page';

registerLocaleData(localeRu, 'ru');

const routes: Routes = [
  {
    path: '',
    component: CourierPage
  }
];

@NgModule({
  imports: [
    IntroJsModule,
    IconsModule,
    CommonModule,
    FormsModule,
    DragDropModule,
    IonicModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CourierPage],
  providers: [
    { provide: LOCALE_ID, useFactory: () => 'ru' }
  ]
})
export class CourierPageModule { }
