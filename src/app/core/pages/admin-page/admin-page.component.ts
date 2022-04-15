import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreationDatePlaceholder, DescriptionPlaceholder, ImgPlaceholder, LinkVideoPlaceholder, TitlePlaceholder } from '@src/app/shared/enums/adminPlaceholders.enums';
import { myValidatorForDescription, myValidatorForTitle, myValidatorForVideo } from '@src/app/shared/helper';
import { AdminPanelPlaceholders } from '@src/app/shared/models/adminPlaceholders.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  placeholder: AdminPanelPlaceholders;

  groupControl: FormGroup;

  constructor(private imageRef: ElementRef){
    this.placeholder = {
      title: TitlePlaceholder.default,
      description: DescriptionPlaceholder.default,
      img: ImgPlaceholder.default,
      linkVideo: LinkVideoPlaceholder.default,
      creationDate: CreationDatePlaceholder.default,
    };

    this.groupControl = new FormGroup({
      titleControl : new FormControl('', [myValidatorForTitle, Validators.required]),
      descriptionControl : new FormControl('', [myValidatorForDescription]),
      imgControl : new FormControl(''),
      linkVideoControl : new FormControl('', [myValidatorForVideo]),
      creationDateControl : new FormControl(''),
    });
  }
}
