import { Component, Input } from '@angular/core';
import { Event } from './../../models/Event';

/**
 * Generated class for the EventItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-item',
  templateUrl: 'event-item.html'
})
export class EventItemComponent {
  @Input() data: Event = null; 
  constructor() {

  }

  public onGoingClick(event: Event): void {
    event.going = !event.going;
  }

  public onIgnoreClick(event: Event): void {
    event.ignored = !event.ignored;
  }

}
