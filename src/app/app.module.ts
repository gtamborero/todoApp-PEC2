import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/* MATERIAL DESIGN IMPORTS */
import {
  MdListModule,
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdChipsModule
  } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoItemClass } from './todo-item.class';
import { TodoList } from './todo-list';
import { TodoItem } from './todo-item';
import { AddTodoItem } from './todo-add';
import { TodoDetail } from './todo-detail';
import { TodoService } from './todo.service';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoList,
    TodoItem,
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
    MdInputModule,
    MdToolbarModule,
    MdChipsModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [TodoService, TodoItemClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
