import { Component, OnInit } from '@angular/core';
import { JotterListCardComponent } from '../../Components/jotter-list-card/jotter-list-card.component';
import { CommonModule } from '@angular/common';
import { Jotter } from '../../Model/jotter';
import { JotterService } from '../../Service/jotter.service';
import { SearchBarComponent } from '../../Components/search-bar/search-bar.component';

@Component({
  selector: 'app-archived-page',
  imports: [JotterListCardComponent, CommonModule, SearchBarComponent],
  templateUrl: './archived-page.component.html',
  styleUrl: './archived-page.component.scss',
})
export class ArchivedPageComponent implements OnInit {
  constructor(private jotterService: JotterService) {}
  protected jotters: Jotter[] = [];

  ngOnInit(): void {
    this.jotterService.getJotterList().subscribe((jotters) => {
      this.jotters = jotters.filter((jotter) => jotter.archived === true);
    });
  }

  handleSearch(searchterm: string) {
    this.jotterService.getJotterList().subscribe((jotters) => {
      this.jotters = jotters.filter(
        (jotter) =>
          jotter.title.includes(searchterm) ||
          jotter.content.includes(searchterm)
      );
    });
  }
}
