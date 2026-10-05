import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Department } from '../models/department.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private readonly http = inject(HttpClient);

  private readonly baseUrl =
    `${environment.apiBaseUrl}/api/organization/departments`;

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl);
  }

  getActiveDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/active`);
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.baseUrl}/${id}`);
  }
}