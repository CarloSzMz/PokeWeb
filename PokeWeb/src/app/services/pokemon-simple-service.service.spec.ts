import { TestBed } from '@angular/core/testing';

import { PokemonSimpleServiceService } from './pokemon-simple-service.service';

describe('PokemonSimpleServiceService', () => {
  let service: PokemonSimpleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSimpleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
