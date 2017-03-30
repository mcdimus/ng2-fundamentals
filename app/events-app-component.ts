import {Component} from "@angular/core";

@Component({
    selector: 'events-app',
    template: `
      <nav-bar></nav-bar>
      <h2>Hello world!</h2>
      <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {

}
