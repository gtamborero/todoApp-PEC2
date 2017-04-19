import { Component, Input, Directive } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'todo-list',
  template: `{{listName}}`,
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {
  @Input() id: string;
  @Input() itemName: string;
  listName: string ="hola";

  constructor() { }

}
