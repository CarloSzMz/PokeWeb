import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../../models/PokemonSimple';

@Injectable({
  providedIn: 'root'
})


export class PokemonSimpleServiceService {

  private url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllPokemons(limit: number = 20, offset: number = 0): Observable<PokemonList> {
    return this.http.get<PokemonList>(`${this.url}/pokemon?limit=${limit}&offset=${offset}`);
  }
}
