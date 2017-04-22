import { RouterModule, Routes } from "@angular/router";
import { TodoList } from './todo-list';
import { TodoDetail } from './todo-detail';

const APP_ROUTES: Routes = [
  { path: '', component: TodoList },
  { path: 'item/:id', component: TodoDetail }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
