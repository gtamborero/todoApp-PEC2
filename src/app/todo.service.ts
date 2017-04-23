import { Injectable } from '@angular/core';
import { TodoItemClass } from './todo-item.class';

@Injectable()
export class TodoService {

  // Defino como Array a todoItems + seteo por defecto
  private todoItems: TodoItemClass[] = [];
  // lastId actua como un primary key de una base de datos
  public lastId: number = 0;

  constructor(){
    // Inicio el loop de store js y guardo los datos a mi objeto todoItems
    // Además me guardo el ID más alto para asignarlo +1 al siguiente todo
    store.each((value, key) => {
        this.todoItems.push({ id: key, todoTxt: value });
        console.log(key, '==', value);
        // Esto es un poco arcaico pero store no tiene una función
        // para capturar el ID más alto (el ID primary Key digamos)
        if (this.lastId < parseInt(key)){
        this.lastId = parseInt(key);
        }
    });
    // Controlo el caso inicial. Si no existen datos pongo este:
    if (this.lastId == 0){
      this.guardarItem("Acabar aplicación");
    }
  }

    getTodoItems(){
      return this.todoItems;
    }

    getTodoItem(id){
      let index = this.findIndex(id);
      return this.todoItems[index];
    }

    guardarItem(text){
      // añado elemento (splice) al inicio (0) del array sin borrar ninguno (0)
      if (text != ""){ // control de inserción de cualquier dato válido
        let newId = this.lastId + 1;
        this.todoItems.splice(0, 0, { id: newId, todoTxt: text });

        // Store data to store.js
        store.set(newId.toString(), text);
        console.log( store.get(newId.toString()) );
        // Después de guardar al objeto y a store js incremento listId
        this.lastId++;
      }
    }

    editarItem(id, text){
      // No es necesario implementar esta funcion a nivel de programa
      // puesto que el campo input de todo-detail está bindeado
      // con el dato del item (es decir que se edita on-the-fly)
      // Simplemente guardamos a store js
      store.set(id.toString(), text);
    }

    borrarItem(id){
      // busco dentro del array el id X y cojo su índice
      let index = this.findIndex(id);
      // Elimino el elemento
      this.todoItems.splice(index, 1);
      // Elimino elemnento en store.js
      store.remove(id.toString());
    }

    // En base a un ID del Todo, busco su índice real dentro del Array
    // Sirve para las funciones borrarItem(id) y para getItem(id)
    findIndex(id){
      return this.todoItems.findIndex( (res) => res.id == id );
    }
}
