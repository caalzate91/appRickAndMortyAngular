import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './videogames/games/games.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path:'',
    component: GamesComponent
  },
  {
    path:'games',
  component: GamesComponent
  },
  {
    path:'rickandmorty',
    component: RickandmortyComponent
  },
  {
    path:'characters',
    component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
