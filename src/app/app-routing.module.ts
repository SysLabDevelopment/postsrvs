import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), canActivate: [AuthGuard] },
  { path: 'courier', loadChildren: () => import('./pages/courier/courier.module').then(m => m.CourierPageModule), canActivate: [AuthGuard] },
  { path: 'order/:id', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderPageModule), canActivate: [AuthGuard] },
  { path: 'map', loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule), canActivate: [AuthGuard] },
  { path: 'balance', loadChildren: () => import('./pages/balance/balance.module').then(m => m.BalancePageModule), canActivate: [AuthGuard] },


  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule) },
  { path: 'draw', loadChildren: () => import('./pages/draw/draw.module').then(m => m.DrawPageModule) },
  { path: 'map/:order', redirectTo: 'map' },

  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule), pathMatch: 'full'
  },
  { path: 'test', redirectTo: 'settings' },

  { path: '**', redirectTo: 'balance', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
