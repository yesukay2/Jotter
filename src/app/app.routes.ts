import { Routes } from '@angular/router';
import { JotterListPageComponent } from './Pages/jotter-list-page/jotter-list-page.component';
import { JotterPageComponent } from './Pages/jotter-page/jotter-page.component';
import { JotterFormPageComponent } from './Pages/jotter-form-page/jotter-form-page.component';

import { routeGuardGuard } from './Guard/route-guard.guard';
import { ArchivedPageComponent } from './Pages/archived-page/archived-page.component';
import { ConfirmDeleteComponent } from './Pages/confirm-delete/confirm-delete.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Pages/login-page/login-page.component').then(
        (module) => module.LoginPageComponent
      ),
  },
  {
    path: 'jotters',
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
    path: 'archived',
    component: ArchivedPageComponent,
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/edit-jotter/confirm-delete/:id',
    component: ConfirmDeleteComponent,
  },
  {
    path: '**',
    component: JotterListPageComponent,
    pathMatch: 'full',
    canActivate: [routeGuardGuard],
  },
];
