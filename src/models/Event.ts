import { EventMember } from './EventMember';
import * as moment from 'moment';

export interface IEvent {
  dateTime: Date;
  description: string;
  id: number;
  image: string;
  members: EventMember[];
  title: string;
  status: string;
  going: boolean;
  ignored: boolean;
}

export class Event implements IEvent {
  public dateTime: Date = null;
  public description: string = null;
  public id: number = null;
  public image: string = null;
  public members: EventMember[] = [];
  public title: string = null;
  public going: boolean = false;
  public ignored: boolean = false;
  public _status: string = null;
  static create(props) {
    return new Event(props);
  }
  public set status(status) {
    this._status = status;
    if (status === "going") {
      this.going = true;
    } else if (status === "ignore") {
      this.ignored = true;
    }
  }
  public get status() {
    return this._status;
  }
  static parseDate(input: string): Date {
    let date = moment(input, "D-MM-YYYY HH:mm:ss");
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