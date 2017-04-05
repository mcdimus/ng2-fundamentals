import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IEvent, ISession} from '../shared/event.model';

@Component({
  templateUrl: 'app/events/event-details/event-details.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }

    .event-image {
      height: 100px;
    }

    a {
      cursor: pointer;
    }
  `]
})
export class EventDetailsComponent implements OnInit {

  addMode: boolean = false;
  event: IEvent;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = maxId + 1;

    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }

}
