import { Injectable } from '@angular/core';
import { Jotter } from '../Model/jotter';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JotterService {
  private jotterListSubject = new BehaviorSubject<Jotter[]>([]);
  private jotterList$ = this.jotterListSubject.asObservable();
  private tagFilteredListSubject = new BehaviorSubject<Jotter[]>([]);
  private tagFilteredList$ = this.tagFilteredListSubject.asObservable();
  private tagFilterStateSubject = new BehaviorSubject<boolean>(false);
  protected tagFilterState$ = this.tagFilterStateSubject.asObservable();
  constructor() {}

  getJotter(id: string): Jotter | undefined {
    return this.jotterListSubject.getValue().find((jotter) => jotter.id === id);
  }

  getJotterList(): Observable<Jotter[]> {
    return this.jotterList$;
  }

  addNewJotter(jotter: Jotter): void {
    this.jotterListSubject.next([jotter, ...this.jotterListSubject.getValue()]);
  }
  updateJotter(jotter: Jotter): void {
    const jotterList = this.jotterListSubject.getValue();
    const updatedList = jotterList.map((_jotter) => {
      if (jotter.id == _jotter.id) {
        return jotter;
      } else {
        return _jotter;
      }
    });

    this.jotterListSubject.next(updatedList);
  }

  ToggleArchiveJotter(id: string): void {
    const jotterList = this.jotterListSubject.getValue();
    const updatedList = jotterList.map((jotter) =>
      jotter.id === id ? { ...jotter, archived: !jotter.archived } : jotter
    );
    this.jotterListSubject.next(updatedList);
  }
  deleteJotter(id: string): void {
    const jotterList = this.jotterListSubject.getValue();
    const updatedList = jotterList.filter((jotter) => jotter.id != id);
    this.jotterListSubject.next(updatedList);
  }

  filterByTag(tag: string): void {
    this.tagFilterStateSubject.next(true);
    const currentJotters: Jotter[] = this.jotterListSubject.getValue();
    this.tagFilteredListSubject.next(
      currentJotters.filter((jotter) => jotter.tag === tag)
    );
  }

  getFilteredJots(): Observable<Jotter[]> {
    return this.tagFilteredList$;
  }

  toggleFilterState() {
    !this.tagFilterState$;
  }
  getTagFilterState(): Observable<boolean> {
    return this.tagFilterState$;
  }

  resetTagFilterState() {
    this.tagFilterStateSubject.next(false);
  }
}
