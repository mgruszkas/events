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
  public eventsCache: Map<number, Event> = new Map<number, Event>();
  constructor(public http: HttpClient) {
  }

  public getAllEvents(reload = false): Promise<Event[]> {
    return new Promise( (resolve, reject) => {
      if (this.eventsCache.size && !reload) {
        resolve(Array.from(this.eventsCache,  e => e[1]));
      } else {
        this.getEvents().subscribe( (events) => {
          events.forEach( (event) => {
            this.eventsCache.set(event.id, event);
          });
          resolve(Array.from(this.eventsCache, e => e[1]));
        }, (error) => {
          reject(error);
        });
      }
    });
  }

  public getEvent(id: number): Promise<Event> {
    return new Promise<Event>( async (resolve, reject) => {
      await this.getAllEvents();
      let event = this.eventsCache.get(id);
      if (event instanceof Event) {
        resolve(event);
      } else {
        reject('Not found');
      }
    });
  }

  private getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(SERVICE_URL).pipe( map(parse) );
  }

}
