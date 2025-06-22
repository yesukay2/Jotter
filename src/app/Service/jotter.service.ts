import { Injectable } from '@angular/core';
import { Jotter } from '../Model/jotter';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JotterService {
  private jotterListSubject = new BehaviorSubject<Jotter[]>([]);
  private jotterList$ = this.jotterListSubject.asObservable();

  constructor() {}

  getJotter(id: number): Jotter | undefined {
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
      if (jotter.id === _jotter.id) {
        return jotter;
      } else {
        return _jotter;
      }
    });

    this.jotterListSubject.next(jotterList);
  }

  ToggleArchiveJotter(id: number): void {
    const jotterList = this.jotterListSubject.getValue();
    const updatedList = jotterList.map((jotter) => {
      if (jotter.id === id) {
        return { ...jotter, archived: !jotter.archived };
      } else {
        return jotter;
      }
    });
    this.jotterListSubject.next(jotterList);
  }

  deleteJotter(id: number): void {
    const jotterList = this.jotterListSubject.getValue();
    const updatedList = jotterList.filter((jotter) => jotter.id != id);
    this.jotterListSubject.next(updatedList);
  }
}
