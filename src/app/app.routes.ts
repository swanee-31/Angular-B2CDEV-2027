import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'catalog', loadComponent: () => import('./catalog/catalog').then(m => m.CatalogComponent) },
  {
    path: 'binding-tests',
    loadComponent: () => import('./binding-tests/binding-tests').then(m => m.BindingTests),
  },
  {
    path: 'struct',
    loadComponent: () =>
      import('./structuration-tests/structuration-tests').then(m => m.StructurationTests),
  },
  { path: '**', redirectTo: 'home' },
];
