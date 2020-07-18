import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoListViewFakeComponent } from './po-list-view-fake.component';

describe('PoListViewFakeComponent', () => {
  let component: PoListViewFakeComponent;
  let fixture: ComponentFixture<PoListViewFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoListViewFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoListViewFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
