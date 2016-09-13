/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GemService } from './gem.service';

describe('Service: Gem', () => {
  beforeEach(() => {
    addProviders([GemService]);
  });

  it('should ...',
    inject([GemService],
      (service: GemService) => {
        expect(service).toBeTruthy();
      }));
});
