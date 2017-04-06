import {VoterService} from './voter.service';
import {ISession} from '../shared/event.model';
import {Observable} from 'rxjs/Rx';

describe('VoterService', () => {

  let voterService: VoterService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove voter from a list of voters', () => {
      // given
      let session = {id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(Observable.of(false));

      // when
      voterService.deleteVoter(3, <ISession>session, 'joe');

      // then
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right URL', () => {
      // given
      let session = {id: 6, voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(Observable.of(false));

      // when
      voterService.deleteVoter(3, <ISession>session, 'joe');

      // then
      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
    });
  });

  describe('addVoter', () => {
    it('should call http.post with the right URL', () => {
      // given
      let session = {id: 6, voters: ['john']};
      mockHttp.post.and.returnValue(Observable.of(false));

      // when
      voterService.addVoter(3, <ISession>session, 'joe');

      // then
      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', '{}', jasmine.any(Object));
    });
  });

});
