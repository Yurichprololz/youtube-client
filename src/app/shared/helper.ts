import { FormControl, ValidationErrors } from '@angular/forms';

export const  myValidatorForPassword = (control: FormControl): ValidationErrors | null => {
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
  return { isOkPassword: 'Your password isn\'t strong enough' };
};
