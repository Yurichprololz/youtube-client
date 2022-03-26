import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/header/auth/auth.component';
import { SearchComponent } from './components/header/search/search.component';
import { SortButtonComponent } from './components/header/sort-button/sort-button.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchCardComponent } from './components/search-results/search-card/search-card.component';
import { ThumbnailComponent } from './components/search-results/search-card/thumbnail/thumbnail.component';
import { StaticticsCountComponent } from './components/search-results/search-card/statictics-count/statictics-count.component';
import { VideoNameComponent } from './components/search-results/search-card/video-name/video-name.component';
import { MoreButtonComponent } from './components/search-results/search-card/more-button/more-button.component';


// console.log(AppRoutingModule)
// console.log(AppComponent)
// console.log(HeaderComponent)
// console.log(AuthComponent)
// console.log(SearchComponent)
// console.log(SortButtonComponent)
// console.log(SettingButtonComponent)
// console.log(SearchCardComponent)
// console.log(ThumbnailComponent)
// console.log(StaticticsCountComponent)
// console.log(VideoNameComponent)
// console.log(MoreButtonComponent)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    SortButtonComponent,
    SettingButtonComponent,
    SearchResultsComponent,
    SearchCardComponent,
    ThumbnailComponent,
    StaticticsCountComponent,
    VideoNameComponent,
    MoreButtonComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }