export interface IEventMember {
  id: number;
  photo: string;
}

export class EventMember implements IEventMember {
  public id: number = null;
  public photo: string = null;

  static create(props) {
    return new EventMember(props);
  }
  private constructor(props) {
    this.id = props.id ? props.id : 0;
    this.photo = props.photo ? props.photo : '';
  }
}
