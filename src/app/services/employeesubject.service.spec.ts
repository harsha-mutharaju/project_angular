import { TestBed } from '@angular/core/testing';

import { EmployeesubjectService } from './employeesubject.service';

describe('EmployeesubjectService', () => {
  let service: EmployeesubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
