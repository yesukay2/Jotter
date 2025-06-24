import { Routes } from '@angular/router';
import { JotterListPageComponent } from './Pages/jotter-list-page/jotter-list-page.component';
import { JotterPageComponent } from './Pages/jotter-page/jotter-page.component';
import { JotterFormPageComponent } from './Pages/jotter-form-page/jotter-form-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { routeGuardGuard } from './Guard/route-guard.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => LoginPageComponent,
  },
  {
    path: 'jotters/',
    component: JotterListPageComponent,
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/view/:id',
    component: JotterPageComponent,
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/new-jotter',
    component: JotterFormPageComponent,
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/edit-jotter/:id',
    component: JotterFormPageComponent,
    canActivate: [routeGuardGuard],
  },
  {
    path: '**',
    component: JotterListPageComponent,
    pathMatch: 'full',
    canActivate: [routeGuardGuard],
  },
];
