import { Component } from '@angular/core';
import { TodoItemComponent } from './todo-item';
import { AddTodoItem } from './todo-add';

@Component({
  selector: 'app',
  template: `
  <h1>TODO APP por <span style="color:#f00; font-style:italic;">{{userCreator}}</span></h1>
  <br />
  <todo-add></todo-add>
  <todo-item></todo-item>


    <a [routerLink]="['/user',1]">User1</a>
    <a [routerLink]="['/user',2]">User2</a>

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
