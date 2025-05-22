import {EmployeeFilterPipe } from './emp.pipe';

describe('EmpPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
