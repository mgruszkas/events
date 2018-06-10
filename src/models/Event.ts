import { EventMember } from './EventMember';
import * as moment from 'moment';

export interface IEvent {
  dateTime: Date;
  description: string;
  id: number;
  image: string;
  members: EventMember[];
  status: string;
  title: string;
  going: boolean;
  ignored: boolean;
}

export class Event implements IEvent {
  dateTime: Date = null;
  description: string = null;
  id: number = null;
  image: string = null;
  members: EventMember[] = [];
  status: string = null;
  title: string = null;
  going: boolean = false;
  ignored: boolean = false;
  static create(props) {
    return new Event(props);
  }
  static parseDate(input: string): Date {
    let date = moment(input, "D-MM-YYYY HH:mm:ss");
    console.log('event', date.toDate())
    return date.toDate();
  }
  constructor(props) {
    this.dateTime = props.dateTime ? Event.parseDate(props.dateTime) : new Date();
    this.description = props.description ? props.description : '';
    this.id = props.id ? props.id : 0;
    this.image = props.image ? props.image : null;
    this.members = props.members.length ? props.members.map( member => EventMember.create(member)) : [];
    this.status = props.status ? props.status : null;
    this.title = props.title ? props.title : '';
  }
}