import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() seeDetails: EventEmitter<Event> = new EventEmitter<Event>();
  constructor() {

  }

  public goToDetails(event: Event): void {
    this.seeDetails.next(event);
  }

  public onGoingClick(event: Event): void {
    event.going = !event.going;
  }

  public onIgnoreClick(event: Event): void {
    event.ignored = !event.ignored;
  }

}
