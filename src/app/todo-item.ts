import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-item',
  template: `
  <ul >
  <li *ngFor="let item of todoItems">id: {{item.id}} {{item.todoTxt}} <a (click)=todoService.delete(item.id)>X</a></li>
  </ul>
  `
})

export class TodoItemComponent {

  constructor(public todoService: TodoService){}
  todoItems = this.todoService.todoItems;
}
