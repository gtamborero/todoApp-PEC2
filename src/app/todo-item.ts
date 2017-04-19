import { Component, Input } from '@angular/core';

export class TodoItem {
    @Input() id: number;
    @Input() todoTxt: string;
}

var TODOITEMS: TodoItem[] = [
  { id: 1, todoTxt: 'comprar pan' },
  { id: 2, todoTxt: 'comprar galletas'}
];

@Component({
  selector: 'todo-item',
  template: `
  <ul >
  <li *ngFor="let item of todoItems">id: {{item.id}} {{item.todoTxt}} <a>X</a></li>
  </ul>
  `
})

export class TodoItemComponent {
 todoItems = TODOITEMS;
}
