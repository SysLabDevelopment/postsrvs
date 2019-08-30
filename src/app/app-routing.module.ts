import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [AuthGuard]  },
  { path: 'courier', loadChildren: './pages/courier/courier.module#CourierPageModule', canActivate: [AuthGuard]  },
  { path: 'order/:id', loadChildren: './pages/order/order.module#OrderPageModule', canActivate: [AuthGuard]  },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule', canActivate: [AuthGuard] },
  { path: 'balance', loadChildren: './pages/balance/balance.module#BalancePageModule',  canActivate: [AuthGuard] },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
