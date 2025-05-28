import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeserviceassignmentComponent } from './employeeserviceassignment.component';

describe('EmployeeserviceassignmentComponent', () => {
  let component: EmployeeserviceassignmentComponent;
  let fixture: ComponentFixture<EmployeeserviceassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeserviceassignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeserviceassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
