import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdListModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item';
import { AddTodoItem } from './todo-add';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddTodoItem
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
