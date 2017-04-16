import { Injectable } from '@angular/core';

@Injectable()
export class TodoItem {
  id: number;
  todoTxt: string;
  constructor (){
    this.id = 0;
    this.todoTxt = "Acabar la aplicación";
  }

  public delete(id){
    alert ("hi inside");
  }
}
