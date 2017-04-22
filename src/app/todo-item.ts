import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-item',
  template: `
    <li *ngFor="let item of todoItems">
      id: {{item.id}} | <a [routerLink]="['/item',item.id]">{{item.todoTxt}}</a>
      <a (click)=todoService.borrarItem(item.id)>ELIMINAR</a>
    </li>
  `
})

export class TodoItemComponent {
  constructor(public todoService: TodoService){}
  todoItems = this.todoService.getTodoItems();
}
