import { Injectable } from '@angular/core';

export class TodoItem {
    id: number;
    todoTxt: string;
}

var TODOITEMS: TodoItem[] = [
  { id: 1, todoTxt: 'comprar pan' },
  { id: 2, todoTxt: 'comprar galletas'},
  { id: 3, todoTxt: 'comprar turrón'}
];

@Injectable()
export class TodoService {
   todoItems = TODOITEMS;

    delete(id){
      // busco dentro del array el id X y cojo su índice
      var index = this.todoItems.findIndex( (res) => res.id == id )
      // Elimino el elemento
      this.todoItems.splice(index, 1);
    }

    add(text){
      // añado elemento al inicio (0), no borro ninguno,
      // pendiente id autoincremental
      this.todoItems.splice(0, 0, { id: 10, todoTxt: text });
      //this.reset(10);
    }

    /*reset(id){
      alert("reseteo id:" + id);
    }*/
}
