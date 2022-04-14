import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreButtonComponent } from './components/search-card/more-button/more-button.component';
import { StaticticsCountComponent } from './components/search-card/statictics-count/statictics-count.component';
import { ThumbnailComponent } from './components/search-card/thumbnail/thumbnail.component';
import { VideoNameComponent } from './components/search-card/video-name/video-name.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ColorizeBorderDirective } from './directives/colorize-border.directive';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortByFilterPipe } from './pipes/sort-by-filter.pipe';
import { SortByKeysPipe } from './pipes/sort-by-keys.pipe';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SortButtonComponent } from './components/sort-button/sort-button.component';
import { SortArrowsDirective } from './directives/sort-arrows.directive';
import { AddAuthTokenInterceptor } from './interceptors/add-auth-token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    SearchResultsComponent,
    MoreButtonComponent,
    StaticticsCountComponent,
    ThumbnailComponent,
    VideoNameComponent,
    SearchCardComponent,
    ColorizeBorderDirective,
    SortByFilterPipe,
    SortByKeysPipe,
    SortButtonComponent,
    MainPageComponent,
    DetailedInfoPageComponent,
    SortArrowsDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
  ],
  exports:[
    MainPageComponent,
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AddAuthTokenInterceptor, multi: true },
  ],
})

export class YoutubeModule { }
