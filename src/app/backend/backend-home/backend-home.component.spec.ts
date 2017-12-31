import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendHomeComponent } from './backend-home.component';

describe('BackendHomeComponent', () => {
  let component: BackendHomeComponent;
  let fixture: ComponentFixture<BackendHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
