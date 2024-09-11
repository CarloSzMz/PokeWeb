import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PokemonList, PokemonSimple } from '../../models/PokemonSimple';
import { PokemonSimpleServiceService } from '../../services/pokemon-simple/pokemon-simple-service.service';
import { switchMap, concatMap, toArray } from 'rxjs/operators';
import { of } from 'rxjs';
import { PokemonSpritesService } from '../../services/pokemon-sprites/pokemon-sprites.service';

@Component({
  selector: 'app-pokemon-simple-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pokemon-simple-component.html',
})
export class PokemonSimpleComponent implements OnInit {

  pokemons: PokemonSimple[] = [];

  constructor(private pokemonSimpleService: PokemonSimpleServiceService, private pokemonSpriteService: PokemonSpritesService  ,  private route: ActivatedRoute, private router: Router){}

  ngOnInit():void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    // Obtener la lista básica de Pokémon
    this.pokemonSimpleService.getAllPokemons(20).subscribe((response: PokemonList) => {
      // Para cada Pokémon, obtenemos los detalles completos
      response.results.forEach(pokemon => {
        this.pokemonSpriteService.getPokemonDetails(pokemon.url).subscribe(pokemonDetails => {
          this.pokemons.push(pokemonDetails); // Guardamos los detalles de cada Pokémon en la lista
        });
      });
    });
  }
}