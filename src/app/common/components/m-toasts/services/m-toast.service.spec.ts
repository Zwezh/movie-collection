/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MToastService } from './m-toast.service';

describe('Service: MToast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MToastService]
    });
  });

  it('should ...', inject([MToastService], (service: MToastService) => {
    expect(service).toBeTruthy();
  }));
});
