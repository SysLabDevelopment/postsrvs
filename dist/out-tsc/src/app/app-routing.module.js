import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule), canActivate: [AuthGuard] },
    { path: 'courier', loadChildren: () => import('./pages/courier/courier.module').then(m => m.CourierPageModule), canActivate: [AuthGuard] },
    { path: 'order/:id', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderPageModule), canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'map', loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule), canActivate: [AuthGuard] },
    { path: 'balance', loadChildren: () => import('./pages/balance/balance.module').then(m => m.BalancePageModule), canActivate: [AuthGuard] },
    { path: 'settings', redirectTo: 'about' },
    { path: 'draw', loadChildren: () => import('./pages/draw/draw.module').then(m => m.DrawPageModule) },
    { path: 'map/:order', redirectTo: 'map' },
    {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
    },
    { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestPageModule) },
    { path: '**', redirectTo: 'balance', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map