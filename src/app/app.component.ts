import { Component } from '@angular/core';
import { TodoItem } from './todo-item'

@Component({
  selector: 'app',
  template: `
  <h1>TODO APP por <span style="color:#f00; font-style:italic;">{{userCreator}}</span></h1>
  <br />

  <todo-item id="{{todoItem.id}}" todoTxt="{{todoItem.todoTxt}}"></todo-item>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userCreator: string = "Guillermo Tamborero";
  todoItem: object;

  constructor(){
    this.todoItem = new TodoItem;
    //console.log (todoItem);
  }

}
