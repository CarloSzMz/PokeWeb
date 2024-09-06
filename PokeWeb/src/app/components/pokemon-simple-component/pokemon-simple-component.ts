import { Component, OnInit } from '@angular/core';
import { PokemonSimpleServiceService } from '../../services/pokemon-simple-service.service';
import { RouterOutlet } from '@angular/router';
import { PokemonList, PokemonSimple } from '../../models/PokemonSimple';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pokemon-simple-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pokemon-simple-component.html',
})
export class PokemonSimpleComponent implements OnInit {

  pokemons: PokemonSimple[] = [];

  constructor(private pokemonSimpleService: PokemonSimpleServiceService){}

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
