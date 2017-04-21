import { Component, Input } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-add',
  template: `
  <form>
  <input #todoadd type="text" placeholder="Escribe tu tarea...">
  <button (click)="todoService.add(todoadd.value); todoadd.value='';">SAVE</button>
  <button (click)="todoadd.value='';">RESET</button>
  </form>
  `
})
export class AddTodoItem {

  constructor(public todoService: TodoService){}

  saveTodo(){
    // Coje el campo input#todoadd.value y guardalo en

  }

  resetTodo(){
  // Coje el campo input#todoadd.value y setealo a nada
  }

}
