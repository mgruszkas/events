import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event, EventMember } from './../../models';
import { map } from 'rxjs/operators';

const SERVICE_URL = 'https://tsh-app.firebaseio.com/events.json';

const parse = x => x.map( e => new Event(e));
/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {

  constructor(public http: HttpClient) {
  }

  public getAllEvents(): Observable<Event> {
    return this.http.get(SERVICE_URL).pipe( map( parse) );
  }

}
