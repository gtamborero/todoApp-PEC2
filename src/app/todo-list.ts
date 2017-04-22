import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
  <todo-add></todo-add>
  <ul>
    <todo-item></todo-item>
  </ul>
  `
})

export class TodoList {
  // Según el enunciado aquí deberia ir el array privado de objetos del ToDo
  // Considero mejor ponerlos dentro del servicio todo.service.ts
}
