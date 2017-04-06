import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {EventService} from './shared/event.service';
import {IEvent} from './shared/event.model';

@Injectable()
export class EventResolver implements Resolve<any> {

  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent> {
    return this.eventService.getEvent(route.params['id']);
  }

}
