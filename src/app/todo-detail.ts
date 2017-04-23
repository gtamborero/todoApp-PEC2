import { Component, Input, OnInit } from '@angular/core';
import { TodoItemClass } from './todo-item.class';
import { TodoService } from './todo.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'todo-detail',
  template: `
  <div style="width:10%; float:left; text-align:left;">
    <md-chip-list>
      <md-chip color="accent" selected="true" style="font-size:16px; font-family:Arial;">ID: {{todoItem.id}}</md-chip>
    </md-chip-list>
  </div>

  <md-input-container>
    <input mdInput type="text" autofocus placeholder="Escribe tu tarea..." [(ngModel)]="todoItem.todoTxt" (keyup.enter) = "this.router.navigate(['']);" >
  </md-input-container>

  <div>
    <button md-button color="warn" [routerLink]="['/']" (click)="todoService.editarItem(todoItem.id, todoItem.todoTxt);">VOLVER</button>
    <button md-button color="primary" [routerLink]="['/']" (click)="todoService.borrarItem(todoItem.id);">BORRAR</button>
  </div>
  `,
  styles: [`
    md-input-container {width:60%; float:left;}
    div {float:right; width:30%; text-align:right;}
  `]
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
