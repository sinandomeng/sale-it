import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UFooterComponent } from './footer.component';

describe('UFooterComponent', () => {
  let component: UFooterComponent;
  let fixture: ComponentFixture<UFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
