import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Box, CheckSquare, List, Loader, MinusCircle, PhoneCall, PlusCircle, Save, Search, Settings, User, XCircle, XOctagon, XSquare } from 'angular-feather/icons';

const icons = {
  PhoneCall,
  MinusCircle,
  PlusCircle,
  Save,
  XSquare,
  User,
  List,
  XCircle,
  XOctagon,
  CheckSquare,
  Search,
  Box,
  Loader,
  Settings
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [FeatherModule]
})
export class IconsModule { }
