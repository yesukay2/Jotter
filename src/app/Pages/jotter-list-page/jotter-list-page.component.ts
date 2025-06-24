import { Component, OnInit } from '@angular/core';
import { JotterService } from '../../Service/jotter.service';
import { Jotter } from '../../Model/jotter';
import { JotterListCardComponent } from '../../Components/jotter-list-card/jotter-list-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jotter-list-page',
  imports: [JotterListCardComponent, CommonModule],
  templateUrl: './jotter-list-page.component.html',
  styleUrl: './jotter-list-page.component.scss',
})
export class JotterListPageComponent implements OnInit {
  protected jotterList: Jotter[] = [];

  constructor(private jotterService: JotterService) {}

  ngOnInit(): void {
    this.jotterService.getJotterList().subscribe((list) => {
      this.jotterList = list;
    });
  }
}
