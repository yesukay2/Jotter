import { Component } from '@angular/core';
import { NotificationService } from '../../Service/notification.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private notificationService: NotificationService) {}
}
