import {SessionListComponent} from './session-list.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {DurationPipe} from '../shared/duration.pipe';
import {By} from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: 'Joe'}
    };
    let mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        DurationPipe,
      ],
      providers: [
        {provide: AuthService, useValue: mockAuthService},
        {provide: VoterService, useValue: mockVoterService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      // given
      component.sessions = [{
        id: 3,
        name: 'Session 1',
        presenter: 'Joe',
        duration: 1,
        level: 'beginner',
        abstract: 'abstract',
        voters: ['john', 'bob']
      }];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      // when
      component.ngOnChanges();
      fixture.detectChanges();

      // then
      expect(element.querySelector('[well-title').textContent).toContain('Session 1');
      expect(debugElement.query(By.css('[well-title')).nativeElement.textContent).toContain('Session 1');
    });
  });

});
