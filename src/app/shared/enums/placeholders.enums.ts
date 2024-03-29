export enum EmailPlaceholders {
  default = 'Please enter a login email',
  valid = 'The login email is valid',
  invalid = 'The login email is invalid',
}

export enum PasswordPlaceholders {
  default = 'Please enter a password',
  valid = 'The login email is valid',
  invalid = 'Your password isn\'t strong enough',
  short = '(at least 8 characters)',
  case = '(a mixture of both uppercase and lowercase letters)',
  mixture = '(a mixture of letters and numbers)',
  specialChar = '(inclusion of at least one special character, e.g., ! @ # ? ])',
}
