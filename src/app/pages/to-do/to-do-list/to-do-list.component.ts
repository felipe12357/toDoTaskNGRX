import { Component, inject } from '@angular/core';
import { TaskType } from '../../../../store/task.store.types';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToDoService } from '../service/to-do.service';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
  standalone:true
})
export class ToDoListComponent {
  private toDoService = inject(ToDoService)
  tasks$:Observable<TaskType[]> =this.toDoService.filteredTaskList$;
  today = new Date();

  delete(id:number){
    this.toDoService.removeTask(id);
  }

}
