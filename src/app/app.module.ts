//MODULES
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { ClipboardModule } from 'ngx-clipboard'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { ModalModule } from 'ngx-bootstrap/modal'
import { NgModule } from '@angular/core'
import { NgxMasonryModule } from 'ngx-masonry'
import { ShareModule } from '@ngx-share/core'

// COMPONENTS
import { AppComponent } from './app.component'
import { GifDetailComponent } from './modals/gif-detail/gif-detail.component'
import { HeaderComponent } from './shared/header/header.component'
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { ResultsComponent } from './pages/results/results.component'

//SERVICES
import { GiphyService } from './services/giphy.service'
import { RandomUidService } from './services/random-uid.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    GifDetailComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    ModalModule.forRoot(),
    NgxMasonryModule,
    ReactiveFormsModule,
    ShareModule
  ],
  entryComponents: [
    GifDetailComponent
  ],
  providers: [
    GiphyService,
    RandomUidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }