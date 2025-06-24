import { Component, OnInit } from '@angular/core';
import { JotterService } from '../../Service/jotter.service';
import { Jotter } from '../../Model/jotter';
import { NotificationService } from '../../Service/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jotter-form',
  imports: [ReactiveFormsModule],
  templateUrl: './jotter-form.component.html',
  styleUrl: './jotter-form.component.scss',
})
export class JotterFormComponent {
  constructor(
    private jotterService: JotterService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  jotterForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(1000),
    ]),
    archived: new FormControl(false),
  });
  createJotter(): void {
    let id = uuid();
    this.jotterService.addNewJotter({
      ...this.jotterForm.value,
      id: id,
    } as Jotter);
    this.jotterForm.get('id')?.setValue(id);
    this.notificationService.showSnackBar(
      'Jotter created successfully',
      'success'
    );
    this.router.navigate(['jotter/view', this.jotterForm.value.id]);
    this.jotterForm.reset();
  }
}
