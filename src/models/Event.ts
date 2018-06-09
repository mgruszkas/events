import { EventMember } from './EventMember';

export interface IEvent {
  dateTime: Date;
  description: string;
  id: number;
  image: string;
  members: EventMember[];
  status: string;
  title: string;
}

export class Event implements IEvent {
  dateTime: Date = null;
  description: string = null;
  id: number = null;
  image: string = null;
  members: EventMember[] = [];
  status: string = null;
  title: string = null;
  static create(props) {
    return new Event(props);
  }
  constructor(props) {
    this.dateTime = props.dateTime ? new Date(props.dateTime) : null;
    this.description = props.description ? props.description : '';
    this.id = props.id ? props.id : 0;
    this.image = props.image ? props.image : null;
    this.members = props.members.length ? props.members.map( member => EventMember.create(member)) : [];
    this.status = props.status ? props.status : null;
    this.title = props.title ? props.title : '';
  }
}