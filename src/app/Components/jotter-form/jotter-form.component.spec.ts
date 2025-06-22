import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotterFormComponent } from './jotter-form.component';

describe('JotterFormComponent', () => {
  let component: JotterFormComponent;
  let fixture: ComponentFixture<JotterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JotterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
