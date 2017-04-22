import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-add',
  template: `
  <form>
    <input #todoadd type="text" autofocus placeholder="Escribe tu tarea...">
    <button (click)="todoService.guardarItem(todoadd.value); todoadd.value='';">SAVE</button>
    <button (click)="todoadd.value='';">RESET</button>
  </form>
  `
})
export class AddTodoItem {
  constructor(public todoService: TodoService){}

  // La función de saveTodo() la hago desde el servicio todoService.guardarItem
  // La función de resetTodo() es innecesaria puesto que puedo resetear el campo
  // directamente y de forma limpia (value='') sin pasar por una función 
}
