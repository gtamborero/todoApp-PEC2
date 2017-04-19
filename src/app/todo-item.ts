import { Injectable } from '@angular/core';

@Injectable()
export class TodoItem {
  id: number = 0;
  todoTxt: string;
  constructor (){
    this.todoTxt = "Acabar la aplicación";
  }

  public delete(id){
    alert ("hi inside");
  }
}
