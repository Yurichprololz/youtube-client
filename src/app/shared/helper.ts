import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PasswordPlaceholders } from './enums/placeholders.enums';

export const  myValidatorForPassword = (control: AbstractControl): ValidationErrors | null => {
  const arrLetters = Array.from(control.value) as string[];
  const isOk =
  control.value.length >= 8 &&
  arrLetters.some((letter) => letter === letter.toLowerCase()) &&
  arrLetters.some((letter) => letter === letter.toLowerCase()) &&
  /[!@#\$%\^&\*\+]/.test(control.value) &&
  /\d/.test(control.value);

  if (isOk){
    return null;
  }
  return { message: PasswordPlaceholders.invalid };
};
