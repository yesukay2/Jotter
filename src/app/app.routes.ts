import { Routes } from '@angular/router';
import { routeGuardGuard } from './Guard/route-guard.guard';
import { JotterFormPageComponent } from './Pages/jotter-form-page/jotter-form-page.component';
import { JotterListPageComponent } from './Pages/jotter-list-page/jotter-list-page.component';
import { JotterPageComponent } from './Pages/jotter-page/jotter-page.component';
import { ArchivedPageComponent } from './Pages/archived-page/archived-page.component';
import { ConfirmDeleteComponent } from './Pages/confirm-delete/confirm-delete.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'jotters',
    component: JotterListPageComponent,
    // canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/view/:id',
    component: JotterPageComponent,
    // canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/new-jotter',
    component: JotterFormPageComponent,
    // canActivate: [routeGuardGuard],
  },

  {
    path: 'jotter/edit-jotter/:id',
    component: JotterFormPageComponent,
    // canActivate: [routeGuardGuard],
  },
  {
    path: 'archived',
    component: ArchivedPageComponent,
    // canActivate: [routeGuardGuard],
  },
  {
    path: 'jotter/edit-jotter/confirm-delete/:id',
    component: ConfirmDeleteComponent,
    // canActivate: [routeGuardGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Pages/wildcard/wildcard.component').then(
        (module) => module.WildcardComponent
      ),
  },
];
