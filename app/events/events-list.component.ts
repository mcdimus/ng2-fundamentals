import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/events/events-list.component.html',
})
export class EventListComponent implements OnInit {
    events: Array<any>;

    constructor(private eventService: EventService,
                private toastrService: ToastrService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName);
    }

}
