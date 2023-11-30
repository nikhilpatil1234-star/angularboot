import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailModelComponent } from './card-detail-model.component';

describe('CardDetailModelComponent', () => {
  let component: CardDetailModelComponent;
  let fixture: ComponentFixture<CardDetailModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailModelComponent]
    });
    fixture = TestBed.createComponent(CardDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
