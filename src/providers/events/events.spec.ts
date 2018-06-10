import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Event } from './../../models/Event';
import { EventsProvider } from './events';


const SERVICE_URL = 'https://tsh-app.firebaseio.com/events.json';
const EVENT_ID = 1;
const RESPONSE = [{  
  dateTime:"1-05-2018 21:22:48",
  description:"TSH A'dam City invited you to this party ",
  id:EVENT_ID,
  image: "https://www.visitdenmark.co.uk/sites/default/files/styles/block_ratio/public/vdk_images/Attractions-Activities-interest-accommodation-people-geo/Events/Sporting-events/color-run-credit-colorrun.dk.jpg?itok=udG3wZA3",
  members:[  
     {  
        id:1,
        photo:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8W2rlxCOL0g/v0/400x-1.jpg"
     }
  ],
  status:"going",
  title:"Amsterdam bike tour"
}];

describe('EventsService', () => {
  let httpMock: HttpTestingController;
  let injector: TestBed;
  let service: EventsProvider;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventsProvider],
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = injector.get(EventsProvider);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();
    done();
  });

  it('should return proper response for getAllEvents()', (done) => {
    service.getAllEvents().then((res) => {
      expect(res).toEqual(RESPONSE.map( e => Event.create(e)));
      done();
    });

    let dataRequest = httpMock.expectOne(SERVICE_URL);
    dataRequest.flush(RESPONSE);
  });

  it('should return proper event for getEvent({id})', (done) => {
    service.getEvent(EVENT_ID).then( (event) => {
      expect(event).toEqual(RESPONSE.map( e => Event.create(e)).find( e => e.id === EVENT_ID));
      done();
    });

    let dataRequest = httpMock.expectOne(SERVICE_URL);
    dataRequest.flush(RESPONSE);
  })
});