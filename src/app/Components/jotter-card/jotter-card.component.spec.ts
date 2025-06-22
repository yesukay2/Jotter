import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotterCardComponent } from './jotter-card.component';

describe('JotterCardComponent', () => {
  let component: JotterCardComponent;
  let fixture: ComponentFixture<JotterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JotterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
