import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreButtonComponent } from './components/search-card/more-button/more-button.component';
import { StaticticsCountComponent } from './components/search-card/statictics-count/statictics-count.component';
import { ThumbnailComponent } from './components/search-card/thumbnail/thumbnail.component';
import { VideoNameComponent } from './components/search-card/video-name/video-name.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ColorizeBorderDirective } from './directives/colorize-border.directive';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SortByFilterPipe } from './pipes/sort-by-filter.pipe';
import { SortByKeysPipe } from './pipes/sort-by-keys.pipe';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    SearchResultsComponent,
    MoreButtonComponent,
    StaticticsCountComponent,
    ThumbnailComponent,
    VideoNameComponent,
    SearchCardComponent,
    ColorizeBorderDirective,
    SearchFilterPipe,
    SortByFilterPipe,
    SortByKeysPipe,
    MainPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
  ],
  exports:[MainPageComponent],
})
export class YoutubeModule { }
