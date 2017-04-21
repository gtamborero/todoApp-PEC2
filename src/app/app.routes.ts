import {RouterModule, Routes} from "@angular/router";
import { TodoItemDetail } from './todo-item-detail';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'user/:id', component: TodoItemDetail }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
