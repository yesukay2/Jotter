import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JotterService } from '../../Service/jotter.service';
import { Jotter } from '../../Model/jotter';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  results?: Jotter[];
  protected searchterm?: string;
  @Output() searchEvent = new EventEmitter<string>();
  constructor(private jotterService: JotterService) {}

  emitSearchChange(searchterm: string) {
    this.searchEvent?.emit(searchterm);
  }
}
