import { Routes } from '@angular/router';
import { PokemonSimpleComponent } from './components/pokemon-simple-component/pokemon-simple-component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },{
    path: 'pokemons',
    component: PokemonSimpleComponent,
  },
];
