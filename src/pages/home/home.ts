import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsProvider } from './../../providers/events/events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private events: EventsProvider) {
    this.events.getAllEvents().subscribe( (data) => {
      console.log('data', data);
    })
  }

}
