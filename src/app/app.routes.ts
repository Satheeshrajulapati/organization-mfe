import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/organization/organization.routes')
        .then(m => m.ORGANIZATION_ROUTES),
  },
];