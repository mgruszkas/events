import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsProvider, Event, EventMember } from './../../providers/events/events';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todayEvents: Event[] = [];
  public weekEvents: Event[] = [];
  constructor(public navCtrl: NavController, private eventsService: EventsProvider) {

    let today = new Date();
    today.setHours(23);
    today.setMinutes(59);

    this.eventsService.getAllEvents().subscribe( (data) => {
      data.map( (event) => {
        if(event.dateTime <= today) {
          this.todayEvents.push(event);
        } else {
          this.weekEvents.push(event);
        }
      });
    }, (error) => {
      console.error('Unable to get events from data source', error);
    });
  }

}
