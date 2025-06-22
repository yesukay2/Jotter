import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotterListPageComponent } from './jotter-list-page.component';

describe('JotterListPageComponent', () => {
  let component: JotterListPageComponent;
  let fixture: ComponentFixture<JotterListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JotterListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JotterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
