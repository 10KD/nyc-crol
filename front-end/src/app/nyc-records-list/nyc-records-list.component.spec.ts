import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NycRecordsListComponent } from './nyc-records-list.component';

describe('NycRecordsListComponent', () => {
  let component: NycRecordsListComponent;
  let fixture: ComponentFixture<NycRecordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NycRecordsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NycRecordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
