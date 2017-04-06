import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app-component';
import {EventListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventListResolver} from './events/events-list-resolver.service';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './events/event-details/create-session.component';
import {SessionListComponent} from './events/event-details/session-list.component';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {DurationPipe} from './events/shared/duration.pipe';
import {JQ_TOKEN} from './common/jQuery.service';
import {SimpleModalComponent} from './common/simpleModal.component';
import {ModalTriggerDirective} from './common/modalTrigger.directive';
import {UpvoteComponent} from './events/event-details/upvote.component';
import {VoterService} from './events/event-details/voter.service';
import {LocationValidatorDirective} from './events/event-details/location-validator.directive';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  id: 'app',
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  providers: [
    EventService,
    AuthService,
    VoterService,
    EventRouteActivator,
    EventListResolver,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}
