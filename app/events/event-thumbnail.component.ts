import {Component, Input} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [
        '.well div { color: #bbb; }'
    ]
})
export class EventThumbnailComponent {
    @Input() event: any
}
