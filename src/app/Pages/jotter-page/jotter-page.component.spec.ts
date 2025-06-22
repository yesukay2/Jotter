import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotterPageComponent } from './jotter-page.component';

describe('JotterPageComponent', () => {
  let component: JotterPageComponent;
  let fixture: ComponentFixture<JotterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JotterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
