import {Injectable} from '@angular/core';
import {ISession} from '../shared/event.model';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class VoterService {

  constructor(private http: Http) {}

  deleteVoter(eventId: number, session: ISession, userName: string): void {
    session.voters = session.voters.filter(voter => voter !== userName);
    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.delete(url)
      .catch(this.handleError)
      .subscribe();
  }

  addVoter(eventId: number, session: ISession, userName: string): void {
    session.voters.push(userName);

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.post(url, JSON.stringify({}), options)
      .catch(this.handleError)
      .subscribe();
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(voter => voter === userName);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(`VoterService - ${error.status} - ${error.statusText}`);
  }

}
