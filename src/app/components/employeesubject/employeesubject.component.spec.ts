import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesubjectComponent } from './employeesubject.component';

describe('EmployeesubjectComponent', () => {
  let component: EmployeesubjectComponent;
  let fixture: ComponentFixture<EmployeesubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
