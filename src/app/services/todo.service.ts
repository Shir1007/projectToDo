import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    { "title": "Beaver, north american", "description": "Castor canadensis", "isComplieted": true, "isArchived": true, "endDate": "12/31/2022" },
    { "title": "Possum, ring-tailed", "description": "Pseudocheirus peregrinus", "isComplieted": true, "isArchived": false, "endDate": "12/12/2023" },
    { "title": "Ringtail", "description": "Bassariscus astutus", "isComplieted": true, "isArchived": false, "endDate": "8/3/2023" },
    { "title": "Common long-nosed armadillo", "description": "Dasypus novemcinctus", "isComplieted": false, "isArchived": false, "endDate": "1/5/2023" },
    { "title": "Common turkey", "description": "Meleagris gallopavo", "isComplieted": false, "isArchived": false, "endDate": "5/7/2023" },
    { "title": "Owl, burrowing", "description": "Speotyte cuniculata", "isComplieted": true, "isArchived": true, "endDate": "8/27/2023" },
    { "title": "Black swan", "description": "Cygnus atratus", "isComplieted": true, "isArchived": false, "endDate": "1/8/2023" },
    { "title": "Numbat", "description": "Myrmecobius fasciatus", "isComplieted": false, "isArchived": true, "endDate": "10/15/2023" },
    { "title": "Monster, gila", "description": "Heloderma horridum", "isComplieted": false, "isArchived": false, "endDate": "4/30/2023" },

  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  constructor() { }
}
