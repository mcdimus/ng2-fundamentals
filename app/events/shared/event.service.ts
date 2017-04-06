import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {IEvent} from './event.model';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class EventService {

  constructor(private http: Http) {}

  getEvents(): Observable<Array<IEvent>> {
    return this.http.get('/api/events')
      .map((response: Response) => <Array<IEvent>>response.json())
      .catch(this.handleError);
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get('/api/events/' + id)
      .map((response: Response) => <IEvent>response.json())
      .catch(this.handleError);
  }

  saveEvent(event): Observable<IEvent> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api/events', JSON.stringify(event), options)
      .map((response: Response) => {return response.json();})
      .catch(this.handleError);
  }

  searchSessions(searchTerm: string): Observable<any> {
    return this.http.get('/api/sessions/search?search=' + searchTerm)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(`EventService - ${error.status} - ${error.statusText}`);
  }

}
