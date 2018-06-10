import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsProvider, Event } from './../../providers/events/events';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public event: Event = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eventsProvider: EventsProvider) {
  }

  ionViewDidLoad() {
    let id = this.navParams.get('id');
    if(id) {
      this.eventsProvider.getEvent(id).then( (event) => {
        this.event = event;
      }, (error) => {
        console.log('Error', error);
      });
    }
  }

  public goBack(): void {
    this.navCtrl.pop();
  }

}
