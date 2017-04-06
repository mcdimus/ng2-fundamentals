import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <h2>Hello world!</h2>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.checkAuthenticationStatus();
  }

}
