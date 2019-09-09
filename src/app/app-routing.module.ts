// MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { AppComponent } from './app.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {path: '', component: AppComponent, children: [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'search/:id', component: ResultsComponent},
    {path: 'gif/:id', component: GifDetailComponent}
  ]},
  {path: '**', pathMatch: 'full', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
