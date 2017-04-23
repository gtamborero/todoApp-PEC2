import { Component, Input } from '@angular/core';


@Component({
  selector: 'todo-list',
  template: `
  <todo-add></todo-add>
  <!-- md-list sustituye a ul para material design -->
  <md-nav-list>
      <todo-item></todo-item>
  </md-nav-list>
  `
})

export class TodoList {
  // Según el enunciado aquí deberia ir el array privado de objetos del ToDo
  // Considero mejor ponerlos dentro del servicio todo.service.ts

}
