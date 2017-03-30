import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {EventService} from "./shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService:EventService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<any>> {
        return this.eventService.getEvents().map(events => events);
    }

}
