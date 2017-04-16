import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `{{listName}}`,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() id: string;
  @Input() itemName: string;

  constructor() { }

}
