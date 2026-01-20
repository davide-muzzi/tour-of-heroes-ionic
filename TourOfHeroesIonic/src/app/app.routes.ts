import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    loadComponent: () =>
      import('./heroes/heroes.page').then((m) => m.HeroesPage),
  },
];
