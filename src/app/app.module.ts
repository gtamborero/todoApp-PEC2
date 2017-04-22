import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdListModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoList } from './todo-list';
import { TodoItemComponent } from './todo-item';
import { AddTodoItem } from './todo-add';
import { TodoDetail } from './todo-detail';
import { TodoService, TodoItem } from './todo.service';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoList,
    TodoItemComponent,
    AddTodoItem,
    TodoDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [TodoService, TodoItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
