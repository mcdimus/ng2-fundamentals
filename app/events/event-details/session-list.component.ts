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
  filterBy: string = 'all';
  @Input()
  sortBy: string = 'votes';

  visibleSessions: Array<ISession> = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
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

function sortByNameAsc(s1: ISession, s2: ISession): number {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
  return s2.voters.length - s1.voters.length;
}
