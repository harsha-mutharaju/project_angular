import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeetable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css'],
  inputs: ['employees'],
  outputs: ['onDelete']
})
export class EmployeetableComponent {
  employees: any[] = [];
  onDelete = new EventEmitter<number>();

  deleteEmployee(id: number) {
    this.onDelete.emit(id);
  }
}
