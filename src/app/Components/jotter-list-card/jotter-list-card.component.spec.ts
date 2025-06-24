import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotterListCardComponent } from './jotter-list-card.component';

describe('JotterListCardComponent', () => {
  let component: JotterListCardComponent;
  let fixture: ComponentFixture<JotterListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JotterListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotterListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
