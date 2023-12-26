import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    { "id": 1, "title": "Beaver, north american", "description": "Castor canadensis", "isComplieted": false, "isArchived": false, "endDate": "12/31/2022", selected: true },
    { "id": 2, "title": "Possum, ring-tailed", "description": "Pseudocheirus peregrinus", "isComplieted": false, "isArchived": false, "endDate": "12/12/2023", selected: false },
    { "id": 3, "title": "Ringtail", "description": "Bassariscus astutus", "isComplieted": false, "isArchived": false, "endDate": "8/3/2023", selected: false },
    { "id": 4, "title": "Common long-nosed armadillo", "description": "Dasypus novemcinctus", "isComplieted": false, "isArchived": false, "endDate": "1/5/2023", selected: false },
    { "id": 5, "title": "Common turkey", "description": "Meleagris gallopavo", "isComplieted": false, "isArchived": false, "endDate": "5/7/2023", selected: false },
    { "id": 6, "title": "Owl, burrowing", "description": "Speotyte cuniculata", "isComplieted": false, "isArchived": false, "endDate": "8/27/2023", selected: false },
    { "id": 7, "title": "Black swan", "description": "Cygnus atratus", "isComplieted": false, "isArchived": false, "endDate": "1/8/2023", selected: false },
    { "id": 8, "title": "Numbat", "description": "Myrmecobius fasciatus", "isComplieted": false, "isArchived": false, "endDate": "10/15/2023", selected: false },
    { "id": 9, "title": "Monster, gila", "description": "Heloderma horridum", "isComplieted": false, "isArchived": false, "endDate": "4/30/2023", selected: false },

  ];


  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);
  private _singleToSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);// נאתחל עם הערך הראשון 


  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleToSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleToSubject.next(todo);
  }

}
