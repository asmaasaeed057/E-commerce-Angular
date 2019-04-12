import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListCounterComponent } from './wish-list-counter.component';

describe('WishListCounterComponent', () => {
  let component: WishListCounterComponent;
  let fixture: ComponentFixture<WishListCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
