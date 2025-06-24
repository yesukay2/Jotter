import { Routes } from '@angular/router';
import { JotterListPageComponent } from './Pages/jotter-list-page/jotter-list-page.component';
import { JotterPageComponent } from './Pages/jotter-page/jotter-page.component';
import { JotterFormPageComponent } from './Pages/jotter-form-page/jotter-form-page.component';

export const routes: Routes = [
  {
    path: 'jotters',
    component: JotterListPageComponent,
  },
  {
    path: 'jotter/view/:id',
    component: JotterPageComponent,
  },
  {
    path: 'jotter/new-jotter',
    component: JotterFormPageComponent,
  },
  {
    path: 'jotter/edit-jotter/:id',
    component: JotterFormPageComponent,
  },
  {
    path: '**',
    component: JotterListPageComponent,
    pathMatch: 'full',
  },
];
