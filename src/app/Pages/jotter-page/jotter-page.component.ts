import { Component } from '@angular/core';
import { JotterCardComponent } from '../../Components/jotter-card/jotter-card.component';

@Component({
  selector: 'app-jotter-page',
  imports: [JotterCardComponent],
  templateUrl: './jotter-page.component.html',
  styleUrl: './jotter-page.component.scss',
})
export class JotterPageComponent {}
