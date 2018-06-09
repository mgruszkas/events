import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventsProvider, Event, EventMember } from './../../providers/events/events';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public todayEvents: Event[] = [];
  public weekEvents: Event[] = [];
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
    today.setHours(23);
    today.setMinutes(59);

    this.eventsService.getAllEvents(reload).then( (data) => {
      this.todayEvents = [];
      this.weekEvents = [];
      data.filter( (element) => {
        return this.filterEvent(search, element);
      }).map( (event) => {
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

  public onInput(): void {
    console.log('search', this.search);
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
