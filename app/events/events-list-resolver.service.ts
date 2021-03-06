import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {EventService} from './shared/event.service';
import {IEvent} from './shared/event.model';

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<IEvent>> {
    return this.eventService.getEvents();
  }

}
