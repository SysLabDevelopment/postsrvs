import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { MinusCircle,PhoneCall,PlusCircle,Save, XSquare,User,List,Settings,XCircle,XOctagon,CheckSquare,Search,Box,Loader } from 'angular-feather/icons';

const icons = {
  PhoneCall,
  MinusCircle,
  PlusCircle,
  Save,
  XSquare,
  User,
  List,
  Settings,
  XCircle,
  XOctagon,
  CheckSquare,
  Search,
  Box,
  Loader
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [FeatherModule]
})
export class IconsModule { }
