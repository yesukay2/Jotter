import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  ViewChild,
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

  @ViewChild('presetsMenu') presetsMenu?: ElementRef;
  @ViewChild('presets') presets?: ElementRef;

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
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
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
    this.clerkService.mountUserProfile(
      document.getElementById('user') as HTMLDivElement
    );
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
    const fontClasses = [
      'font-montserrat',
      'font-sevillana',
      'font-roboto-condensed',
    ];
    // Remove all other font classes
    fontClasses.forEach((fc) => body.classList.remove(fc));

    // Add selected font
    body.classList.add(fontClass);
  }
}
