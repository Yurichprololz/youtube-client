import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreationDatePlaceholder, DescriptionPlaceholder, ImgPlaceholder, LinkVideoPlaceholder, TitlePlaceholder } from '@src/app/shared/enums/adminPlaceholders.enums';
import { myValidatorForDate, myValidatorForDescription, myValidatorForImg, myValidatorForTitle, myValidatorForVideo } from '@src/app/shared/helper';
import { AdminPanelPlaceholders } from '@src/app/shared/models/adminPlaceholders.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit, OnDestroy {
  placeholder: AdminPanelPlaceholders;

  groupControl: FormGroup;

  titleControl: AbstractControl;

  descriptionControl: AbstractControl;

  imgControl: AbstractControl;

  linkVideoControl: AbstractControl;

  creationDateControl: AbstractControl;

  private destroy$ = new Subject<void>();

  constructor(){
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
      imgControl : new FormControl('', [myValidatorForImg, Validators.required]),
      linkVideoControl : new FormControl('', [myValidatorForVideo, Validators.required]),
      creationDateControl : new FormControl('', [myValidatorForDate, Validators.required]),
    });
    this.titleControl = this.groupControl.controls['titleControl'];
    this.descriptionControl = this.groupControl.controls['descriptionControl'];
    this.imgControl = this.groupControl.controls['imgControl'];
    this.linkVideoControl = this.groupControl.controls['linkVideoControl'];
    this.creationDateControl = this.groupControl.controls['creationDateControl'];
  }

  ngOnInit() {
    this.groupControl.statusChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.placeholder.title = this.titleControl.pristine ? TitlePlaceholder.default : this.titleControl.getError('message') || TitlePlaceholder.valid;
      this.placeholder.description =  this.descriptionControl.pristine ? DescriptionPlaceholder.default : this.descriptionControl.getError('message') || DescriptionPlaceholder.valid;
      this.placeholder.img = this.imgControl.pristine ? ImgPlaceholder.default : this.imgControl.getError('message') || ImgPlaceholder.valid;
      this.placeholder.linkVideo =  this.linkVideoControl.pristine ? LinkVideoPlaceholder.default : this.linkVideoControl.getError('message') || LinkVideoPlaceholder.valid;
      this.placeholder.creationDate = this.creationDateControl.pristine ? CreationDatePlaceholder.default : this.creationDateControl.getError('message') || CreationDatePlaceholder.valid;
    });
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
