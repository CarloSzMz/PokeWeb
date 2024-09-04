import { Routes } from '@angular/router';
import { PokemonSimpleComponent } from './components/pokemon-simple-component/pokemon-simple-component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

export const routes: Routes = [
  {
    path: 'pokemons',
    component: PokemonSimpleComponent,
  },
  {
    path: 'prueba',
    component: PruebasComponent,
  }
];
