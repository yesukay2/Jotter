import { Component, OnInit, SecurityContext } from '@angular/core';
import { JotterService } from '../../Service/jotter.service';
import { Jotter } from '../../Model/jotter';
import { NotificationService } from '../../Service/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jotter-form',
  imports: [ReactiveFormsModule],
  templateUrl: './jotter-form.component.html',
  styleUrl: './jotter-form.component.scss',
})
export class JotterFormComponent implements OnInit {
  isEditMode: boolean = false;
  paramId?: string;

  constructor(
    private jotterService: JotterService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitiser: DomSanitizer,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id !== undefined && id !== null) {
      this.paramId = id;
      const jot = this.jotterService.getJotter(id);
      !!jot && this.jotterForm.get('title')?.setValue(jot!.title);
      !!jot && this.jotterForm.get('content')?.setValue(jot!.content);
    }
  }
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

  sanitise() {
    this.jotterForm
      .get('title')
      ?.setValue(
        this.sanitiser.sanitize(
          SecurityContext.HTML,
          this.jotterForm.value.title!
        )
      );
    this.jotterForm
      .get('content')
      ?.setValue(
        this.sanitiser.sanitize(
          SecurityContext.HTML,
          this.jotterForm.value.content!
        )
      );
  }

  createJotter(): void {
    if (this.jotterForm.valid) {
      this.sanitise();
      const jot = this.jotterForm.value;
      const id = uuid();
      if (this.isEditMode && this.paramId) {
        this.jotterService.updateJotter({
          ...jot,
        } as Jotter);
        // this.jotterForm.get('id')?.setValue(id);
        this.notificationService.showSnackBar('Jotter updated', 'success');
        this.router.navigate(['jotter/view', this.jotterForm.value.id]);
        this.jotterForm.reset();
      } else {
        this.jotterService.addNewJotter({
          ...jot,
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
  }

  goBack() {
    this.location.back();
  }
}
