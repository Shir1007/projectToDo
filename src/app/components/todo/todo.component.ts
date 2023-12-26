import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todo: ITodo;
  private subscription: Subscription = new Subscription(); // צריך את destroy
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //נוסיף unsubscribe todoServiceל
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data => {
        this.todo = data;
      })
    )
  }

  ngOnDestroy(): void {
    //נסיר unsubscribe ל todoService
    this.subscription.unsubscribe(
    )
  }

  public onCompleteTodo(todo: ITodo): void {
    todo.isComplieted = true;
  }

  public onArchiveTodo(): void {
    this.todo.isArchived = true;
  }








}
