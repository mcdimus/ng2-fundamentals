import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
})
export class EventListComponent implements OnInit {
    events: Array<any>;

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService
    ) {
    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName:string) {
        this.toastrService.success(eventName);
    }

}
