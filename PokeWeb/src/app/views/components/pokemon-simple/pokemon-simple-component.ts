import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PokemonList, PokemonSimple } from '../../models/PokemonSimple';
import { PokemonSimpleServiceService } from '../../services/pokemon-simple/pokemon-simple-service.service';

@Component({
  selector: 'app-pokemon-simple-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pokemon-simple-component.html',
})
export class PokemonSimpleComponent implements OnInit {

  pokemons: PokemonSimple[] = [];

  constructor(private pokemonSimpleService: PokemonSimpleServiceService, private route: ActivatedRoute, private router: Router){}

  ngOnInit():void {
    this.loadPokemons();
  }

  loadPokemons():void{
    this.pokemonSimpleService.getAllPokemons(20).subscribe((response: PokemonList)=> {
      this.pokemons = response.results;

      console.log(this.pokemons);
    });
  }
}
