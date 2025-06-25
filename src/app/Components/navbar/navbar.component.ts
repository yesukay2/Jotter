import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { CommonModule } from '@angular/common';
import { JotterService } from '../../Service/jotter.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected userId?: string;
  protected jotterCount?: number;
  protected archivedCount: number = 0;
  protected tags?: string[];

  constructor(
    private authService: AuthService,

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
}
