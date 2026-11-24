import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'binding-tests', 
        loadComponent: () => import('./binding-tests/binding-tests').then(m => m.BindingTests) },
    { path: 'struct',
        loadComponent: () => import('./structuration-tests/structuration-tests').then(m => m.StructurationTests)
    }
];
