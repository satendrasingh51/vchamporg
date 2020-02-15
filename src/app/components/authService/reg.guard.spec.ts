import { TestBed, async, inject } from '@angular/core/testing';

import { RegGuard } from './reg.guard';

describe('RegGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegGuard]
    });
  });

  it('should ...', inject([RegGuard], (guard: RegGuard) => {
    expect(guard).toBeTruthy();
  }));
});
