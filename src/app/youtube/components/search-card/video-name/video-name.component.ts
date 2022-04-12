import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-name',
  templateUrl: './video-name.component.html',
  styleUrls: ['./video-name.component.scss'],
})

export class VideoNameComponent {
  @Input() title: string | undefined;
}
