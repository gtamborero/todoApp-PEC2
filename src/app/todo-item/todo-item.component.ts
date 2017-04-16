import { Component, Input } from '@angular/core';
import { TodoItem } from '../todo-item'

@Component({
  selector: 'todo-item',
  template: `
  <md-list-item id="{{id}}">id: {{id}} {{todoTxt}} <a (click)="delete(id);">X</a></md-list-item>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() id: number;
  @Input() todoTxt: string;
  constructor() { }

  delete(id){
    var todo = new TodoItem;
    todo.delete(0);
  }

}
