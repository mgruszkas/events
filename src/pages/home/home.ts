import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsProvider, Event, EventMember } from './../../providers/events/events';

const ONE_DAY_TIMESPAN = 3600 * 24 * 100;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public todayEvents: Event[] = [];
  public weekEvents: Event[] = [];
  public otherEvents: Event[] = [];
  public search: string = '';
  public get shouldShowCancel() {
    return this.search.length;
  }
  constructor(public navCtrl: NavController, private eventsService: EventsProvider) {

    
  }

  public ngOnInit(): void {
    this.loadData('', true);
  }

  private loadData(search = '', reload = false): void {
    let today = new Date();
    today.setHours(23, 59);
    let yesterday = new Date(today.getTime() - ONE_DAY_TIMESPAN);
    let week = new Date(today.getTime() + 7 * ONE_DAY_TIMESPAN);

    this.eventsService.getAllEvents(reload).then( (data) => {
      this.todayEvents = [];
      this.weekEvents = [];
      this.otherEvents = [];
      data.filter( (element) => {
        return this.filterEvent(search, element);
      }).map( (event) => {
        if(event.dateTime > yesterday && event.dateTime <= today) {
          this.todayEvents.push(event);
        } else if (event.dateTime > yesterday && event.dateTime <= week ){
          this.weekEvents.push(event);
        } else {
          this.otherEvents.push(event);
        }
      });
    }, (error) => {
      console.error('Unable to get events from data source', error);
    });
  }

  public onInput(): void {
    this.loadData(this.search);
  }

  public onCancel(): void {
    this.search = '';
    this.loadData();
  }

  private filterEvent(search: string, event: Event): boolean {
    return event.title.toLowerCase().indexOf( search.toLowerCase()) !== -1;
  }

}
