import { Component, Input, OnInit } from '@angular/core';
import { TodoItemClass } from './todo-item.class';
import { TodoService } from './todo.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'todo-detail',
  template: `
  ID: {{todoItem.id}} - <input type="text" [(ngModel)]="todoItem.todoTxt" (keyup.enter) = "this.router.navigate(['']);" >
  <a [routerLink]="['/']" (click)="todoService.borrarItem(todoItem.id);">BORRAR</a>
  <a [routerLink]="['/']" (click)="todoService.editarItem(todoItem.id, todoItem.todoTxt);">BACK</a>
  `
})

export class TodoDetail implements OnInit {

  id: number;
  private subscription:any;

  constructor(
    public todoService: TodoService,
    public todoItem: TodoItemClass,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ){
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // Set todoItem para usar en template
      this.todoItem = this.todoService.getTodoItem(this.id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
