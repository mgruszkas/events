import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EventItemComponent } from './event-item';
import { PipesModule } from './../../pipes/pipes.module';
import { Event } from './../../models/Event';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

const EVENT_ID = 1;
const EVENT_MOCK = {  
  dateTime:"1-05-2018 21:22:48",
  description:"TSH A'dam City invited you to this party ",
  id:EVENT_ID,
  image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  members:[  
     {  
        id:1,
        photo:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
     }
  ],
  status:"going",
  title:"Amsterdam bike tour"
};

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventItemComponent ],
      imports: [PipesModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemComponent);
    component = fixture.componentInstance;
    component.data = Event.create(EVENT_MOCK);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    let title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain(EVENT_MOCK.title);
  });

  it('should have one button visible', () => {
    let buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toEqual(1);
  });

  it('should display "Ignore" button after clicking on "Going" button', () => {
    let button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toEqual(2);
  })
});
