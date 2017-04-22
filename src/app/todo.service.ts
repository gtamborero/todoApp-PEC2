import { Injectable } from '@angular/core';

// Definición de la clase TodoItem
export class TodoItem {
    id: number;
    todoTxt: string;
}

@Injectable()
export class TodoService {

  // Defino como Array a todoItems + seteo por defecto
  private todoItems: TodoItem[] = [{ id: 0, todoTxt: 'Acabar la aplicación' }];
  public lastId = 1;

    getTodoItems(){
      // Ahora pinto el inicial pero tiene que conectarse con storejs
      // tambien tener en cuenta el lastId
      return this.todoItems;
    }

    getTodoItem(id){
      // Ahora pinto el inicial pero tiene que conectarse con storejs
      // tambien tener en cuenta el lastId
      let index = this.findIndex(id);
      return this.todoItems[index];
    }

    guardarItem(text){
      // añado elemento al inicio (0), no borro ninguno,
      if (text != ""){ // control de inserción de cualquier dato válido
        this.todoItems.splice(0, 0, { id: this.lastId, todoTxt: text });
        this.lastId++;
      }
    }

    borrarItem(id){
      // busco dentro del array el id X y cojo su índice
      let index = this.findIndex(id);
      // Elimino el elemento
      this.todoItems.splice(index, 1);
    }

    // En base a un ID del Todo, busco su índice real dentro del Array
    // Sirve para borrarItem(id) y para getItem(id)
    findIndex(id){
      return this.todoItems.findIndex( (res) => res.id == id );
    }
}
