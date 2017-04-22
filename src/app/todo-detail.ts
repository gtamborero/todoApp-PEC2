import { Component, Input, OnInit } from '@angular/core';
import { TodoService, TodoItem } from './todo.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'todo-detail',
  template: `
  {{todoItem.id}} {{todoItem.todoTxt}}
  <a [routerLink]="['/']">BACK</a>
  `
})

export class TodoDetail implements OnInit {

  id: number;
  private subscription:any;

  constructor(
    public todoService: TodoService,
    public todoItem: TodoItem,
    private activatedRoute: ActivatedRoute
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
