import { TestBed } from '@angular/core/testing';

import { TranslateLenguageService } from './translate-lenguage.service';

describe('TranslateLenguageService', () => {
  let service: TranslateLenguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateLenguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
