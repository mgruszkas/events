import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { EventsProvider } from './events';

describe('ContactsService', () => {
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

  it('should be created',() => {
    expect(service).toBeTruthy();
  });
});