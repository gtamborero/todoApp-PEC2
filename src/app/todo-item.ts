import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-item',
  template: `
    <li *ngFor="let item of todoItems">
      <a (click)="goDetail(item.id)">{{item.todoTxt}}</a>
      <a (click)=todoService.borrarItem(item.id)>ELIMINAR</a>
    </li>
  `
})

export class TodoItem {
  constructor(
    public todoService: TodoService,
    public router: Router
  ){}
  todoItems = this.todoService.getTodoItems();

  goDetail(id){
    this.router.navigate(['/item', id]);
  }

  borrarItem(id){
    // No es necesaria esta función puesto que uso directamente
    // el servicio todoService.borrarItem(id)
  }
}
