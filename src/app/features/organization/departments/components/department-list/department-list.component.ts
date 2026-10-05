import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.scss'
})
export class DepartmentListComponent implements OnInit {

  private readonly departmentService = inject(DepartmentService);

  readonly departments = signal<Department[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly displayedColumns = [
    'code',
    'name',
    'status'
  ];

  ngOnInit(): void {
    this.loadDepartments();
  }

  private loadDepartments(): void {
    this.loading.set(true);
    this.errorMessage.set(null);

    this.departmentService.getDepartments().subscribe({
      next: (departments) => {
        this.departments.set(departments);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Failed to load departments', error);

        this.errorMessage.set('Unable to load departments.');
        this.loading.set(false);
      }
    });
  }
}