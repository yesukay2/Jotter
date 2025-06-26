import { Routes } from '@angular/router';
// import { JotterListPageComponent } from './Pages/jotter-list-page/jotter-list-page.component';
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
    loadComponent: () =>
      import('./Pages/jotter-list-page/jotter-list-page.component').then(
        (module) => module.JotterListPageComponent
      ),
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/view/:id',
    loadComponent: () =>
      import('./Pages/jotter-page/jotter-page.component').then(
        (module) => module.JotterPageComponent
      ),
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/new-jotter',
    loadComponent: () =>
      import('./Pages/jotter-form-page/jotter-form-page.component').then(
        (module) => module.JotterFormPageComponent
      ),
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/edit-jotter/:id',
    loadComponent: () =>
      import('./Pages/jotter-form-page/jotter-form-page.component').then(
        (module) => module.JotterFormPageComponent
      ),
    canActivate: [routeGuardGuard],
  },
  {
    path: 'archived',
    loadComponent: () =>
      import('./Pages/archived-page/archived-page.component').then(
        (module) => module.ArchivedPageComponent
      ),
    canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/edit-jotter/confirm-delete/:id',
    loadComponent: () =>
      import('./Pages/confirm-delete/confirm-delete.component').then(
        (module) => module.ConfirmDeleteComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Pages/wildcard/wildcard.component').then(
        (module) => module.WildcardComponent
      ),
    pathMatch: 'full',
    canActivate: [routeGuardGuard],
  },
];
