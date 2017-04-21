import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-add',
  template: `
  <form>
    <input #todoadd type="text" placeholder="Escribe tu tarea...">
    <button (click)="todoService.guardarItem(todoadd.value); todoadd.value='';">SAVE</button>
    <button (click)="todoadd.value='';">RESET</button>
  </form>
  `
})
export class AddTodoItem {
  constructor(public todoService: TodoService){}
}
