import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    .nav.navbar-nav {
      font-size: 15px;
    }

    #searchForm {
      margin-right: 100px;
    }

    li > a.active {
      color: orange !important;
    }

    @media (max-width: 1200px) {
      #searchForm {
        display: none;
      }
    }
  `]
})
export class NavBarComponent {

  searchTerm: string = '';
  foundSessions: Array<ISession>;

  constructor(private authService: AuthService,
              private eventService: EventService) {}

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => this.foundSessions = sessions
    );
  }

}
