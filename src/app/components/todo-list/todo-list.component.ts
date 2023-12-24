import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Array<ITodo> = []; // תמיד נאתחל
  private subscription: Subscription = new Subscription(); // צריך את destroy

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //נוסיף unsubscribe todoServiceל
    this.subscription.add(
      this.todoService.getTodos().subscribe(data => {
        this.todos = data;
      })
    )
  }

  ngOnDestroy() {
    //נסיר unsubscribe ל todoService
    this.subscription.unsubscribe(

    )
  }

}

/*const temp =
  [{ "title": "Beaver, north american", "description": "Castor canadensis", "isComplieted": true, "isArchived": true, "endDate": "12/31/2022" },
  { "title": "Possum, ring-tailed", "description": "Pseudocheirus peregrinus", "isComplieted": true, "isArchived": false, "endDate": "12/12/2023" },
  { "title": "Ringtail", "description": "Bassariscus astutus", "isComplieted": true, "isArchived": false, "endDate": "8/3/2023" },
  { "title": "Common long-nosed armadillo", "description": "Dasypus novemcinctus", "isComplieted": false, "isArchived": false, "endDate": "1/5/2023" },
  { "title": "Common turkey", "description": "Meleagris gallopavo", "isComplieted": false, "isArchived": false, "endDate": "5/7/2023" },
  { "title": "Long-billed cockatoo", "description": "Cacatua tenuirostris", "isComplieted": false, "isArchived": false, "endDate": "4/4/2023" },
  { "title": "Campo flicker", "description": "Colaptes campestroides", "isComplieted": true, "isArchived": true, "endDate": "6/12/2023" },
  { "title": "Eagle, white-bellied sea", "description": "Haliaetus leucogaster", "isComplieted": true, "isArchived": false, "endDate": "2/10/2023" },
  { "title": "Brown antechinus", "description": "Antechinus flavipes", "isComplieted": true, "isArchived": true, "endDate": "2/6/2023" },
  { "title": "Black vulture", "description": "Aegypius tracheliotus", "isComplieted": true, "isArchived": true, "endDate": "9/29/2023" },
  { "title": "Eastern indigo snake", "description": "Drymarchon corias couperi", "isComplieted": true, "isArchived": true, "endDate": "6/1/2023" },
  { "title": "Red-necked phalarope", "description": "Phalaropus lobatus", "isComplieted": true, "isArchived": true, "endDate": "11/6/2023" },
  { "title": "Hippopotamus", "description": "Hippopotamus amphibius", "isComplieted": true, "isArchived": false, "endDate": "11/23/2023" },
  { "title": "Pronghorn", "description": "Antilocapra americana", "isComplieted": true, "isArchived": false, "endDate": "3/21/2023" },
  { "title": "Raven, cape", "description": "Corvus albicollis", "isComplieted": true, "isArchived": false, "endDate": "10/7/2023" },
  { "title": "Tayra", "description": "Eira barbata", "isComplieted": false, "isArchived": true, "endDate": "7/24/2023" },
  { "title": "Owl, burrowing", "description": "Speotyte cuniculata", "isComplieted": true, "isArchived": true, "endDate": "8/27/2023" },
  { "title": "Black swan", "description": "Cygnus atratus", "isComplieted": true, "isArchived": false, "endDate": "1/8/2023" },
  { "title": "Numbat", "description": "Myrmecobius fasciatus", "isComplieted": false, "isArchived": true, "endDate": "10/15/2023" },
  { "title": "Monster, gila", "description": "Heloderma horridum", "isComplieted": false, "isArchived": false, "endDate": "4/30/2023" }]

*/