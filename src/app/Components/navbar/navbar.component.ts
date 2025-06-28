// import {
//   Component,
//   OnInit,
//   ElementRef,
//   HostListener,
//   ViewChild,
//   AfterViewInit,
// } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { AuthService } from '../../Service/auth.service';
// import { CommonModule } from '@angular/common';
// import { JotterService } from '../../Service/jotter.service';
// import { ClerkService } from '../../Service/clerk.service';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterLink, CommonModule],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss',
// })
// export class NavbarComponent implements OnInit, AfterViewInit {
//   protected userId?: string;
//   protected jotterCount?: number;
//   protected archivedCount: number = 0;
//   protected tags?: string[];

//   @ViewChild('presetsMenu') presetsMenu?: ElementRef;
//   @ViewChild('presets') presets?: ElementRef;
//   @ViewChild('user', { static: false }) userRef!: ElementRef;

//   presetsVisible: boolean = false;
//   menuOpen = false;

//   constructor(
//     private authService: AuthService,
//     private clerkService: ClerkService,
//     private jotterService: JotterService
//   ) {
//     this.userId = this.authService.getUserId();
//     this.jotterService.getJotterList().subscribe((list) => {
//       this.jotterCount = list.length;
//       this.archivedCount = list.filter((jot) => jot.archived === true).length;
//       this.tags = list
//         .filter((jot) => !!jot.tag === true)
//         .map((jot) => jot.tag);
//     });
//   }

//   ngOnInit(): void {}

//   ngAfterViewInit(): void {
//     if (this.userRef?.nativeElement) {
//       this.clerkService.mountUserProfile(this.userRef.nativeElement);
//     }
//   }

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//   }

//   closeMenu() {
//     this.menuOpen = false;
//   }

//   filterByTag(tag: string) {
//     this.jotterService.toggleFilterState();
//     this.jotterService.filterByTag(tag);
//   }

//   getTagCount(tag: string) {
//     let count = 0;
//     this.jotterService.getJotterList().subscribe((list) => {
//       count = list.filter((jot) => jot.tag === tag).length;
//     });
//     return count;
//   }

//   unfilteredState() {
//     this.jotterService.resetTagFilterState();
//   }

//   setDefaultTheme() {
//     document.body.classList.remove('dark', 'pink');
//   }

//   setDarkTheme() {
//     document.body.classList.add('dark');
//     document.body.classList.remove('pink');
//   }

//   setOrangeTheme() {
//     document.body.classList.add('pink');
//     document.body.classList.remove('dark');
//   }

//   togglePresets() {
//     this.presetsVisible = !this.presetsVisible;
//     this.updatePresetsVisibility();
//   }

//   private updatePresetsVisibility() {
//     const element = this.presetsMenu?.nativeElement as HTMLDivElement;
//     if (this.presetsVisible) {
//       element.classList.remove('hidden');
//     } else {
//       element.classList.add('hidden');
//     }
//   }

//   @HostListener('document:click', ['$event'])
//   onClickOutside(event: MouseEvent) {
//     const clickedInsidePresets = this.presetsMenu?.nativeElement.contains(
//       event.target
//     );
//     const clickedToggleBtn = this.presets?.nativeElement.contains(event.target);
//     if (!clickedInsidePresets && !clickedToggleBtn) {
//       this.presetsVisible = false;
//       this.updatePresetsVisibility();
//     }
//   }

//   setFont(fontClass: string) {
//     const body = document.body;
//     const fontClasses = [
//       'font-montserrat',
//       'font-sevillana',
//       'font-roboto-condensed',
//       'font-sans-serif',
//       'font-serif',
//       'font-monospace',
//     ];
//     fontClasses.forEach((fc) => body.classList.remove(fc));
//     body.classList.add(fontClass);
//   }
// }
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
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { JotterService } from '../../Service/jotter.service';
import { ClerkService } from '../../Service/clerk.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  protected userId?: string;
  protected jotterCount?: number;
  protected archivedCount: number = 0;
  protected tags?: string[];
  // protected menuOpen: boolean = false;

  @ViewChild('presetsMenu') presetsMenu?: ElementRef;
  @ViewChild('presets') presets?: ElementRef;
  @Output() closeMenu = new EventEmitter<void>();
  @Input() menuOpen: boolean = false;

  presetsVisible = false;
  menuOpen = false;

  constructor(
    private authService: AuthService,
    private clerkService: ClerkService,
    private jotterService: JotterService
  ) {
    this.userId = this.authService.getUserId();
    this.jotterService.getJotterList().subscribe((list) => {
      this.jotterCount = list.length;
      this.archivedCount = list.filter((jot) => jot.archived).length;
      this.tags = [...new Set(list.map((jot) => jot.tag).filter(Boolean))];
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

  getTagCount(tag: string): number {
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
    document.body.classList.remove('dark', 'pink');
  }

  setDarkTheme() {
    document.body.classList.add('dark');
    document.body.classList.remove('pink');
  }

  setOrangeTheme() {
    document.body.classList.add('pink');
    document.body.classList.remove('dark');
  }

  togglePresets() {
    this.presetsVisible = !this.presetsVisible;
    this.updatePresetsVisibility();
  }

  private updatePresetsVisibility() {
    const element = this.presetsMenu?.nativeElement;
    if (element) {
      this.presetsVisible
        ? element.classList.remove('hidden')
        : element.classList.add('hidden');
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInsidePresets = this.presetsMenu?.nativeElement?.contains(
      event.target
    );
    const clickedToggleBtn = this.presets?.nativeElement?.contains(
      event.target
    );

    if (!clickedInsidePresets && !clickedToggleBtn) {
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
