import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(): void {
    //נסיר unsubscribe ל todoService
    this.subscription.unsubscribe(
    )
  }

  public onTodoClick(todo: ITodo, index: number): void {
    this.todoService.setSelectedTodo(todo);
    //נבדוק שכל שאר הtodo לא selected 
    this.todos.forEach(todo => {
      if (todo.selected) {
        todo.selected = false;
      }
    })
    this.todos[index].selected = true;
  }


}
