import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event, EventMember } from './../../models';
import { map } from 'rxjs/operators';

export * from './../../models/Event';
export * from './../../models/EventMember';

const SERVICE_URL = 'https://tsh-app.firebaseio.com/events.json';

const parse = x => x.map( e => new Event(e));
/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {
  public eventsCache: Event[] = [];
  constructor(public http: HttpClient) {
  }

  public getAllEvents(reload = false): Promise<Event[]>{
    return new Promise( (resolve, reject) => {
      if (this.eventsCache.length && !reload) {
        resolve(this.eventsCache);
      } else {
        this.getEvents().subscribe( (events) => {
          this.eventsCache = events;
          resolve(this.eventsCache);
        }, (error) => {
          reject(error);
        });
      }
    });
  }

  private getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(SERVICE_URL).pipe( map(parse) );
  }

}
