import { Component, Input, input } from '@angular/core';
import { Jotter } from '../../Model/jotter';
import { RouterLink } from '@angular/router';
import { JotterService } from '../../Service/jotter.service';
import { NotificationService } from '../../Service/notification.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-jotter-list-card',
  imports: [RouterLink, DatePipe],
  templateUrl: './jotter-list-card.component.html',
  styleUrl: './jotter-list-card.component.scss',
})
export class JotterListCardComponent {
  @Input() jotter!: Jotter;

  constructor(
    private jotterService: JotterService,
    private notificationService: NotificationService
  ) {}

  toggleArchive(id: string) {
    this.jotterService.ToggleArchiveJotter(id);
    this.notificationService.showSnackBar(
      this.jotterService.getJotter(id)?.archived
        ? 'Archived Jotter'
        : 'Unarchived Jotter',
      'success'
    );
  }
}
