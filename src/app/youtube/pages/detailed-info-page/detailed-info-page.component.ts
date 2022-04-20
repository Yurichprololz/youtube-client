import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from '@src/app/core/services/navigate.service';
import { SearchService } from '@src/app/core/services/search.service';
import { YoutubeCard } from '@src/app/redux/state.models';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss'],
})

export class DetailedInfoPageComponent implements OnInit {
  id: string | undefined;

  video: YoutubeCard | undefined;

  hasData: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private navigator: NavigateService,
    private searchService: SearchService,
  ){}

  ngOnInit(){
    this.id = this.router.snapshot.params['id'];
    if (this.id){
      this.searchService.getSingleVideo(this.id)
        .subscribe({
          next: async (video) => {
            this.video = video;
            console.log(video);
            // await this.donwloadImage(this.video.linkImage);
            this.hasData = true;
          },
          error: (error) => {
            console.log(error);
            this.goHome();
          },
        });
    }
  }

  donwloadImage(src: string){
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = rej;
      img.src = src;
    });
  }

  goHome() {
    this.navigator.goHome();
  }
}
