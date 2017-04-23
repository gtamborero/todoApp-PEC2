import { Component } from '@angular/core';
import { TodoList } from './todo-list';
import { TodoItem } from './todo-item';
import { AddTodoItem } from './todo-add';

@Component({
  selector: 'app',
  template: `

  <md-toolbar color="primary">
    <div style="float:left;">TodoApp por</div>
    <div style="font-style:italic; float:right; text-align:right; width:100%;">{{userCreator}}</div>
  </md-toolbar>

  <router-outlet></router-outlet>
  `,
  styles: [`
    md-toolbar {margin-bottom:20px;}
  `]
})
export class AppComponent {
  userCreator: string = "Guillermo Tamborero";

  constructor(){

    //console.log (todoItem);
  }

}
