import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ISession} from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {

  @Input()
  sessions: Array<ISession>;
  @Input()
  filterBy: string;

  visibleSessions: Array<ISession> = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  private filterSessions(filterBy: string): void {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filterBy);
    }
  }

}
