import { Component, OnInit } from '@angular/core';
import { JotterService } from '../../Service/jotter.service';
import { Jotter } from '../../Model/jotter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jotter-card',
  imports: [],
  templateUrl: './jotter-card.component.html',
  styleUrl: './jotter-card.component.scss',
})
export class JotterCardComponent implements OnInit {
  constructor(
    private jotterService: JotterService,
    private route: ActivatedRoute
  ) {}

  private jotter?: Jotter;
  private paramId?: string;
  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id') as string;
    this.jotter = this.jotterService.getJotter(parseInt(this.paramId!));
  }
}
