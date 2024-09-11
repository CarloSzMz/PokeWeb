import { TestBed } from '@angular/core/testing';
import { PokemonSpritesService } from './pokemon-sprites.service';


describe('PokemonSpritesService', () => {
  let service: PokemonSpritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSpritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
