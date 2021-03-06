import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/user/login.component.html',
  styles: [`
    em {
      float: right;
      color: red;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent {

  loginInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(formValues): void {
    this.authService.loginUser(formValues.userName, formValues.password).subscribe(response => {
      if (!response) {
        this.loginInvalid = true;
      } else {
        this.loginInvalid = false;
        this.router.navigate(['events']);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

}
