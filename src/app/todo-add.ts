import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-add',
  template: `
  <form>
    <md-input-container>
      <input mdInput #todoadd type="text" autofocus placeholder="Escribe tu tarea...">
    </md-input-container>
    <div>
      <button md-button color="primary" (click)="todoService.guardarItem(todoadd.value); todoadd.value='';">SAVE</button>
      <button md-button color="accent" (click)="todoadd.value='';">RESET</button>
    </div>
  </form>
  `,
  styles: [`
    form {padding:17px; }
    md-input-container {width:70%; float:left;}
    div {float:right; width:30%; text-align:right;}
  `]
})
export class AddTodoItem {
  constructor(public todoService: TodoService){}

  // La función de saveTodo() la hago desde el servicio todoService.guardarItem
  // La función de resetTodo() es innecesaria puesto que puedo resetear el campo
  // directamente y de forma limpia (value='') sin pasar por una función
}
