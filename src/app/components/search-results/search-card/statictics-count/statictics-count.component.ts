import { Component, Input } from '@angular/core';
import * as interfaces from '../../../../../interfaces';

@Component({
  selector: 'app-statictics-count',
  templateUrl: './statictics-count.component.html',
  styleUrls: ['./statictics-count.component.scss'],
})
export class StaticticsCountComponent {
  @Input() statictics: interfaces.Istatistics | undefined;
}
