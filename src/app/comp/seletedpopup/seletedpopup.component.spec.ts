import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletedpopupComponent } from './seletedpopup.component';

describe('SeletedpopupComponent', () => {
  let component: SeletedpopupComponent;
  let fixture: ComponentFixture<SeletedpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeletedpopupComponent]
    });
    fixture = TestBed.createComponent(SeletedpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
