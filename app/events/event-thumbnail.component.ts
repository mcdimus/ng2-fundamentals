import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter

    handleClickMe() {
        console.log("clicked");
        this.eventClick.emit(this.event.name);
    }
}
