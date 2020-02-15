import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminexperimentsComponent } from './adminexperiments.component';

describe('AdminexperimentsComponent', () => {
  let component: AdminexperimentsComponent;
  let fixture: ComponentFixture<AdminexperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminexperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminexperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
