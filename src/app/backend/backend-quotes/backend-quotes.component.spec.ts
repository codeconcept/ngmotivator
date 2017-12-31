import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendQuotesComponent } from './backend-quotes.component';

describe('BackendQuotesComponent', () => {
  let component: BackendQuotesComponent;
  let fixture: ComponentFixture<BackendQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
