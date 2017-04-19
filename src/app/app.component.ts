import { Component } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app',
  template: `
  <h1>TODO APP por <span style="color:#f00; font-style:italic;">{{userCreator}}</span></h1>
  <br />
<todo-list></todo-list>
  <todo-item id="{{todoItem[0].id}}" todoTxt="{{todoItem[0].todoTxt}}"></todo-item>
  <todo-item id="{{todoItem[1].id}}" todoTxt="{{todoItem[1].todoTxt}}"></todo-item>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userCreator: string = "Guillermo Tamborero";
  todoItem: object[] = [];

  constructor(){
    this.todoItem[0] = new TodoItem;
    this.todoItem[1] = new TodoItem;
    //console.log (todoItem);
  }

}
