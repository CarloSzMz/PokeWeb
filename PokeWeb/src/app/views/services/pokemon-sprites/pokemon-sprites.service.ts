import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList, PokemonSimple } from '../../models/PokemonSimple';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PokemonSpritesService {

  private url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }


  getPokemonDetails(url: string): Observable<PokemonSimple> {
    return this.http.get<PokemonSimple>(url);
  }
}
