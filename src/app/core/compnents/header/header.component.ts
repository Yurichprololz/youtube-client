import { Component } from '@angular/core';
import { ToggleButtonService } from '../../services/toggle-button.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(private ToggleS :ToggleButtonService){}

  toggle() {
    this.ToggleS.toggleEmit.emit();
  }
}
