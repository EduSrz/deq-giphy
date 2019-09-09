//MODULES
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
/* import { NgxBootstrapModule } from './externalModules/ngx-bootstrap.module'; */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// COMPONENTS
import { AppComponent } from './app.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';
import { GifPreviewComponent } from './modals/gif-preview/gif-preview.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginSignupComponent } from './modals/login-signup/login-signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResultsComponent } from './pages/results/results.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

//SERVICES
import { GiphyService } from './services/giphy.service';

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
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    /* NgxBootstrapModule, */
    ReactiveFormsModule
  ],
  providers: [
    GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);