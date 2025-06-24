import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JotterService } from '../../Service/jotter.service';
import { NotificationService } from '../../Service/notification.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-confirm-delete',
  imports: [],
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss',
})
export class ConfirmDeleteComponent implements OnInit {
  private paramid?: string;
  constructor(
    private jotterService: JotterService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.paramid = this.route.snapshot.paramMap.get('id')!;
  }

  cancel() {
    this.location.back();
  }
  confirmDelete() {
    this.jotterService.deleteJotter(this.paramid!);
    this.notificationService.showSnackBar('Jot deleted', 'success');
    this.router.navigate(['/jotters']);
  }
}
