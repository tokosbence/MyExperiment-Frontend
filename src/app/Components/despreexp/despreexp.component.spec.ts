import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreexpComponent } from './despreexp.component';

describe('DespreexpComponent', () => {
  let component: DespreexpComponent;
  let fixture: ComponentFixture<DespreexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespreexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespreexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
