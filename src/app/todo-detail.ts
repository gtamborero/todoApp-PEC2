import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'todo-detail',
  template: `
  {{id}}
  `
})

export class TodoDetail implements OnInit {

  id: number;
  private subscription:any;

  constructor(
    public todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ){
  }
  //todoItems = this.todoService.getTodoItems();

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      console.log(this.todoService.getTodoItem(this.id));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
