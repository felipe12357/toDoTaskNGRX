import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { TaskState } from '../../../../store/task.reducer';
import { TaskType } from '../../../../store/task.store.types';
import { addTask, removeTask } from '../../../../store/task.actions';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private store = inject(Store<{ taskState: TaskState }>)
  private searchTermSubject:BehaviorSubject<string> = new BehaviorSubject('');
  private searchTerm$:Observable<string> = this.searchTermSubject.asObservable();
  private allTask$:Observable<TaskType[]> = this.store.select(state => state.taskState.taskList);


  filteredTaskList$ = combineLatest([this.searchTerm$,this.allTask$]).pipe(map(([filterText,taskList])=>{
    return taskList.filter((task)=>  task.name.includes(filterText) );
  }))

  updateSearch(text:string){
    this.searchTermSubject.next(text);
  }

  addTask(task:TaskType){
    this.store.dispatch(addTask({task:task}))
  }

  removeTask(id:number){
    this.store.dispatch(removeTask({id}))
  }
}
