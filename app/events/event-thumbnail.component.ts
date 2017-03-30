import {Component, Input} from "@angular/core";
import {IEvent} from "./shared/event.model";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
      .well div {
        color: #bbb;
      }

      .thumbnail {
        min-height: 210px;
      }

      .green {
        color: darkgreen !important;
      }

      .orange {
        color: darkorange !important;
      }

      .red {
        color: darkred !important;
      }

      .bold {
        font-weight: bold;
      }
    `

    ]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeClass() {
        if (!this.event) return [];
        let classes: Array<string> = ['bold'];

        if (this.event.time === '8:00 am') {
            classes.push('green')
        } else if (this.event.time === '9:00 am') {
            classes.push('orange')
        } else {
            classes.push('red')
        }
        return classes;
    }

}
