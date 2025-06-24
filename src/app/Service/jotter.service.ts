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
}
