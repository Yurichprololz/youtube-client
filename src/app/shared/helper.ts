import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CreationDatePlaceholder, DescriptionPlaceholder, ImgPlaceholder, LinkVideoPlaceholder, TitlePlaceholder } from './enums/adminPlaceholders.enums';
import { PasswordPlaceholders } from './enums/placeholders.enums';

export const  myValidatorForPassword = (control: AbstractControl): ValidationErrors | null => {
  const arrLetters = Array.from(control.value) as string[];

  if (control.value.length < 8){
    return { message: PasswordPlaceholders.invalid + PasswordPlaceholders.short };
  }
  if (!arrLetters.some((letter) => letter === letter.toLowerCase())
   || !arrLetters.some((letter) => letter === letter.toUpperCase())){
    return { message: PasswordPlaceholders.invalid + PasswordPlaceholders.case };
  }
  if (!/[!@#\$%\^&\*\+]/.test(control.value)){
    return { message: PasswordPlaceholders.invalid + PasswordPlaceholders.specialChar };
  }
  if (!/\d/.test(control.value)){
    return { message: PasswordPlaceholders.invalid + PasswordPlaceholders.mixture };
  }

  return null;
};

export const  myValidatorForTitle = (control: AbstractControl): ValidationErrors | null => {
  if (control.value.length < 3){
    return { message: TitlePlaceholder.short };
  }
  if (control.value.length > 20){
    return { message: TitlePlaceholder.long };
  }
  return null;
};

export const  myValidatorForDescription = (control: AbstractControl): ValidationErrors | null => {
  if (control.value.length > 255){
    return { message: DescriptionPlaceholder.invalid };
  }
  return null;
};

export const  myValidatorForDate = (control: AbstractControl): ValidationErrors | null => {
  console.log((control.value as Date) > new Date());
  if ((control.value as Date) > new Date()){
    return { message: CreationDatePlaceholder.invalid };
  }
  return null;
};

export const  myValidatorForVideo = (control: AbstractControl): ValidationErrors | null => {
  try {
    new URL(control.value);
    return null;
  } catch (error) {
    return { message: LinkVideoPlaceholder.invalid };
  }
};

export const  myValidatorForImg = (control: AbstractControl): ValidationErrors | null => {
  try {
    new URL(control.value);
    return null;
  } catch (error) {
    return { message: ImgPlaceholder.invalid };
  }
};
