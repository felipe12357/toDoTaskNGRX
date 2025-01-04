import { Routes } from '@angular/router';
import { ToDoComponent } from './pages/to-do/to-do.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'toDo' },
    {
      path: 'toDo',component:ToDoComponent
    }
];
