import { Component } from '@angular/core';
import { PokemonSimpleServiceService } from '../../services/pokemon-simple-service.service';
import { RouterOutlet } from '@angular/router';
import { PokemonList, PokemonSimple } from '../../models/PokemonSimple';

@Component({
  selector: 'app-pokemon-simple-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pokemon-simple-component.html',
})
export class PokemonSimpleComponent {

  pokemons: PokemonSimple[] = [];

  constructor(private pokemonSimpleService: PokemonSimpleServiceService){}

  ngOnInit():void {
    this.loadPokemons;
  }

  loadPokemons():void{
    this.pokemonSimpleService.getAllPokemons(20).subscribe((response: PokemonList)=> {
      this.pokemons = response.results;
    });
  }
}
