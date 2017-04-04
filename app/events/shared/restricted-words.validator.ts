import {FormControl, ValidatorFn} from '@angular/forms';

export function restrictedWords(words: Array<string>): ValidatorFn {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) return null;

    let invalidWords: Array<string> = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null);

    return invalidWords && invalidWords.length > 0
      ? {'restrictedWords': invalidWords.join(', ')}
      : null;
  };
}
