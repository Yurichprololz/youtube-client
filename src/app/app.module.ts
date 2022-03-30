import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/header/auth/auth.component';
import { SearchComponent } from './components/header/search/search.component';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchCardComponent } from './components/search-results/search-card/search-card.component';
import { ThumbnailComponent } from './components/search-results/search-card/thumbnail/thumbnail.component';
import { StaticticsCountComponent } from './components/search-results/search-card/statictics-count/statictics-count.component';
import { VideoNameComponent } from './components/search-results/search-card/video-name/video-name.component';
import { MoreButtonComponent } from './components/search-results/search-card/more-button/more-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    BrowserAnimationsModule,
    FormsModule,
    // AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
