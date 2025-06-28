import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { RouterLink, TitleStrategy } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { JotterService } from '../../Service/jotter.service';
import { ClerkService } from '../../Service/clerk.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  protected userId?: string;
  protected jotterCount?: number;
  protected archivedCount: number = 0;
  protected tags?: string[];
  // protected menuOpen: boolean = false;

  @ViewChild('presetsMenu') presetsMenu?: ElementRef;
  @ViewChild('presets') presets?: ElementRef;
  @Output() closeMenu = new EventEmitter<void>();
  @Input() menuOpen: boolean = false;

  presetsVisible: boolean = false;

  constructor(
    private authService: AuthService,
    private clerkService: ClerkService,
    private jotterService: JotterService
  ) {
    this.userId = this.authService.getUserId();
    this.jotterService.getJotterList().subscribe((list) => {
      this.jotterCount = list.length;
      this.archivedCount = list.filter((jot) => jot.archived === true).length;
      this.tags = list
        .filter((jot) => !!jot.tag === true)
        .map((jot) => jot.tag);
    });
  }

  ngOnInit(): void {
    this.mountUser();
  }

  closeMenuBtn() {
    this.menuOpen = false;
    this.closeMenu.emit(); // notify AppComponent to update its menuOpen state
  }

  filterByTag(tag: string) {
    this.jotterService.toggleFilterState();
    this.jotterService.filterByTag(tag);
  }
  getTagCount(tag: string) {
    let count = 0;
    this.jotterService.getJotterList().subscribe((list) => {
      count = list.filter((jot) => jot.tag === tag).length;
    });
    return count;
  }

  unfilteredState() {
    this.jotterService.resetTagFilterState();
  }

  mountUser() {
    const el = document.getElementById('user') as HTMLDivElement;
    console.log('from nav comp', this.clerkService.isSignedIn());
    if (!this.clerkService.isSignedIn()) return;
    this.clerkService.mountUserProfile(el);
  }

  setDefaultTheme() {
    document.body.classList.contains('dark') &&
      document.body.classList.remove('dark');
    document.body.classList.contains('pink') &&
      document.body.classList.remove('pink');
  }
  setDarkTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.contains('default') &&
      document.body.classList.remove('default');
    document.body.classList.contains('pink') &&
      document.body.classList.remove('pink');
  }
  setOrangeTheme() {
    document.body.classList.toggle('pink');
    document.body.classList.contains('default') &&
      document.body.classList.remove('default');
    document.body.classList.contains('dark') &&
      document.body.classList.remove('dark');
  }

  togglePresets() {
    this.presetsVisible = !this.presetsVisible;
    this.updatePresetsVisibility();
  }

  private updatePresetsVisibility() {
    const element = this.presetsMenu!.nativeElement as HTMLDivElement;
    if (this.presetsVisible) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInsidePresets = this.presetsMenu?.nativeElement.contains(
      event.target
    );
    const clickedToggleBtn = this.presets?.nativeElement.contains(event.target);
    if (!clickedInsidePresets && !clickedToggleBtn) {
      this.presetsVisible = false;
      this.updatePresetsVisibility();
    } else if (clickedInsidePresets) {
      this.presetsVisible = false;
      this.updatePresetsVisibility();
    }
  }

  setFont(fontClass: string) {
    const body = document.body;
    const fontClasses = ['font-sans-serif', 'font-serif', 'font-monospace'];
    fontClasses.forEach((fc) => body.classList.remove(fc));
    body.classList.add(fontClass);
  }
}
