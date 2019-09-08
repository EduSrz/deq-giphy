import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ResultsComponent } from './pages/results/results.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GifPreviewComponent } from './modals/gif-preview/gif-preview.component';
import { LoginSignupComponent } from './modals/login-signup/login-signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    ResultsComponent,
    GifDetailComponent,
    NotFoundComponent,
    GifPreviewComponent,
    LoginSignupComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
