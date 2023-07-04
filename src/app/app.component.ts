import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rows: Employee[] = [];
  ColumnMode = ColumnMode;

  constructor(private http: HttpClient) {
    this.fetch().subscribe((data) => {
      this.rows = data;
    });
  }

  fetch(): Observable<Employee[]> {
    return this.http.get<Employee[]>('assets/data/company.json');
  }
}
