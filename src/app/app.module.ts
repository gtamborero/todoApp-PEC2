import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdListModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item';
import { AddTodoItem } from './todo-add';
import { TodoItemDetail } from './todo-item-detail';
import { TodoService } from './todo.service';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddTodoItem,
    TodoItemDetail
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
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
