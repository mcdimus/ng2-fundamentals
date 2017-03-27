import {Component} from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
})
export class EventListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '26.09.2036',
        time: '10:00',
        price: 599.99,
    };
}
