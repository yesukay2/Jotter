import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotterFormPageComponent } from './jotter-form-page.component';

describe('JotterFormPageComponent', () => {
  let component: JotterFormPageComponent;
  let fixture: ComponentFixture<JotterFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JotterFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotterFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
