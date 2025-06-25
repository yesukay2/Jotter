import { Component, OnInit } from '@angular/core';
import { JotterService } from '../../Service/jotter.service';
import { Jotter } from '../../Model/jotter';
import { JotterListCardComponent } from '../../Components/jotter-list-card/jotter-list-card.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../Components/search-bar/search-bar.component';

@Component({
  selector: 'app-jotter-list-page',
  imports: [JotterListCardComponent, CommonModule, SearchBarComponent],
  templateUrl: './jotter-list-page.component.html',
  styleUrl: './jotter-list-page.component.scss',
})
export class JotterListPageComponent implements OnInit {
  protected jotterList: Jotter[] = [];

  constructor(private jotterService: JotterService) {}

  ngOnInit(): void {
    this.jotterService.getTagFilterState().subscribe((state) =>
      state
        ? this.jotterService.getFilteredJots().subscribe((jotters) => {
            this.jotterList = jotters;
          })
        : this.jotterService.getJotterList().subscribe((list) => {
            this.jotterList = list;
          })
    );
  }

  handleSearch(searchterm: string) {
    this.jotterService.getJotterList().subscribe((jotters) => {
      this.jotterList = jotters.filter(
        (jotter) =>
          jotter.title.includes(searchterm) ||
          jotter.content.includes(searchterm) ||
          jotter.tag.includes(searchterm)
      );
    });
  }
}
