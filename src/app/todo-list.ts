import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
  <ul>
    <todo-add></todo-add>
    <todo-item></todo-item>
  </ul>
  `
})

export class TodoList {
}
