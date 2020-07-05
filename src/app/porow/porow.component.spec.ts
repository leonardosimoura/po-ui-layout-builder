import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorowComponent } from './porow.component';

describe('PorowComponent', () => {
  let component: PorowComponent;
  let fixture: ComponentFixture<PorowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
