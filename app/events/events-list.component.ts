import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared/event.model';

@Component({
  templateUrl: 'app/events/events-list.component.html',
})
export class EventListComponent implements OnInit {

  events: Array<IEvent>;

  constructor(private eventService: EventService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

}
