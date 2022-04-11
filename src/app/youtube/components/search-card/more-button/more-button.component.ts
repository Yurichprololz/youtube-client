import { Component, Input } from '@angular/core';
import { NavigateService } from '@src/app/core/services/navigate.service';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss'],
})
export class MoreButtonComponent {
  constructor(private navigate :NavigateService){}

  @Input() id:any;

  getDetailedInfo(){
    console.log(this.id);
    if (this.id){
      this.navigate.getDetailedInfo(this.id);
    }
  }
}
