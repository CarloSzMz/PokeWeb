import { Routes } from '@angular/router';
import { PokemonSimpleComponent } from './views/components/pokemon-simple/pokemon-simple-component';
import { InicioComponent } from './views/components/inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },{
    path: 'pokemons',
    component: PokemonSimpleComponent,
  },
];
