import {Injectable} from '@angular/core';
import {ISession} from '../shared/event.model';

@Injectable()
export class VoterService {

  deleteVoter(session: ISession, userName: string): void {
    session.voters = session.voters.filter(voter => voter !== userName);
  }

  addVoter(session: ISession, userName: string): void {
    session.voters.push(userName);
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(voter => voter === userName);
  }

}
