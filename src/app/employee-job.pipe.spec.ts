import { EmployeeJobPipe } from './employee-job.pipe';

describe('EmployeeJobPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeJobPipe();
    expect(pipe).toBeTruthy();
  });
});
