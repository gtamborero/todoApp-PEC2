import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-item',
  template: `
    <!-- md-list sustituye a li -->
    <md-list-item *ngFor="let item of todoItems">
      <a md-line (click)="goDetail(item.id)">{{item.todoTxt}}</a>
      <a md-raised-button color="warn" (click)="todoService.borrarItem(item.id)">
        ELIMINAR
     </a>
    </md-list-item>
  `,
  styles: [`
    md-list-item {border-bottom: 1px solid #eee; width:100%; clear:both;}
  `]
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
