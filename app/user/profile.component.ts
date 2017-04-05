import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Toastr, TOASTR_TOKEN} from '../common/toastr.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em {
      float: right;
      color: red;
      padding-left: 10px;
    }

    .error input {
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
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService,
              private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

  ngOnInit(): void {
    this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl('', Validators.required);

    if (this.authService.isAuthenticated()) {
      this.firstName.setValue(this.authService.currentUser.firstName);
      this.lastName.setValue(this.authService.currentUser.lastName);
    }

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
      this.toastr.success('Profile Saved');
    }
  }

  cancel(): void {
    this.router.navigate(['events'])
  }

}
