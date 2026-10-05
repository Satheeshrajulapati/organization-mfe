import { Routes } from '@angular/router';

export const ORGANIZATION_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'departments',
    pathMatch: 'full'
  },
  {
    path: 'departments',
    loadComponent: () =>
      import(
        './features/organization/departments/components/department-list/department-list.component'
      ).then(m => m.DepartmentListComponent)
  }
];

// Used when organization-mfe runs independently on port 4202
export const routes: Routes = ORGANIZATION_ROUTES;