import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NycRecordsComponent } from './nyc-records.component';

describe('NycRecordsComponent', () => {
  let component: NycRecordsComponent;
  let fixture: ComponentFixture<NycRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NycRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NycRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
