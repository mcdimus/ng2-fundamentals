import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ISession} from '../shared/event.model';

@Component({
  templateUrl: 'app/events/event-details/create-session.component.html',
  styles: [`
    em {
      float: right;
      color: red;
      padding-left: 10px;
    }

    .error input, .error select, .error textarea {
      background-color: lightcoral;
    }

    .error ::-webkit-input-placeholder,
    .error ::-moz-placeholder,
    .error :-moz-placeholder,
    .error :-ms-input-placeholder {
      color: red;
    }
  `]
})
export class CreateSessionComponent implements OnInit {

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  private restrictedWords(words: Array<string>): ValidatorFn {
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

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    console.log(session);
  }

}
