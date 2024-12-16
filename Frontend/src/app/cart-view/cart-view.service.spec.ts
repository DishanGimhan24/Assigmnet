import { TestBed } from '@angular/core/testing';

import { CartViewService } from './cart-view.service';

describe('CartViewService', () => {
  let service: CartViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
