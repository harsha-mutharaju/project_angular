import { TestBed } from '@angular/core/testing';

import { EmployeemodelService } from './employeemodel.service';

describe('EmployeemodelService', () => {
  let service: EmployeemodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeemodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
