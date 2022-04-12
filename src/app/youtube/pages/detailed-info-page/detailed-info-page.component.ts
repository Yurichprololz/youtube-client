import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from '@src/app/core/services/navigate.service';
import { IVideo } from '@src/app/shared/models/videos.model';
import { MochDataService } from '../../services/moch-data.service';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss'],
})

export class DetailedInfoPageComponent implements OnInit {
  id: string | undefined;

  video: IVideo | undefined;

  constructor(
    private router: ActivatedRoute,
    private mochService: MochDataService,
    private navigator: NavigateService,
  ){}

  ngOnInit(){
    this.id = this.router.snapshot.params['id'];
    if (this.id){
      this.video = this.mochService.findVideo(this.id);
    }
  }

  goHome() {
    this.navigator.goHome();
  }
}
