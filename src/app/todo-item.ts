import { Component, Input } from '@angular/core';

export class TodoItem {
    @Input() id: number;
    @Input() todoTxt: string;
}

var TODOITEMS: TodoItem[] = [
  { id: 1, todoTxt: 'comprar pan' },
  { id: 2, todoTxt: 'comprar galletas'},
  { id: 3, todoTxt: 'comprar turrón'}
];

@Component({
  selector: 'todo-item',
  template: `
  <ul >
  <li *ngFor="let item of todoItems">id: {{item.id}} {{item.todoTxt}} <a (click)=delete(item.id)>X</a></li>
  </ul>
  `
})

export class TodoItemComponent {
 todoItems = TODOITEMS;

 constructor(){
   this.add("goo");
 }

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
 }
}
