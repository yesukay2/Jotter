import { Component, OnInit } from '@angular/core';
import { JotterService } from '../../Service/jotter.service';
import { Jotter } from '../../Model/jotter';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../Service/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jotter-card',
  imports: [],
  templateUrl: './jotter-card.component.html',
  styleUrl: './jotter-card.component.scss',
})
export class JotterCardComponent implements OnInit {
  constructor(
    private jotterService: JotterService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  protected jotter?: Jotter;
  private jotterList?: Observable<Jotter[]>;
  private paramId?: string;
  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id') as string;
    this.jotter = this.jotterService.getJotter(this.paramId!);
    this.jotterList = this.jotterService.getJotterList();
  }

  toggleArchive() {
    const isArchived = this.jotter?.archived ?? false;
    // console.log(this.jotter?.archived);
    this.jotterService.ToggleArchiveJotter(this.jotter!.id);
    this.jotter = this.jotterService.getJotter(this.paramId!);
    this.notificationService.showSnackBar(
      isArchived
        ? 'Jotter unarchived successfully'
        : 'Jotter archived successfully',
      'success'
    );
  }

  deleteJotter() {
    this.jotterService.deleteJotter(this.jotter!.id);
  }
}
