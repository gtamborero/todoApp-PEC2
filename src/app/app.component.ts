import { Component } from '@angular/core';
import { TodoList } from './todo-list';
import { TodoItemComponent } from './todo-item';
import { AddTodoItem } from './todo-add';

@Component({
  selector: 'app',
  template: `
  <h1>TODO APP por <span style="color:#f00; font-style:italic;">{{userCreator}}</span></h1>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userCreator: string = "Guillermo Tamborero";

  constructor(){

    //console.log (todoItem);
  }

}
