import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskType } from '../../../../store/task.store.types';
import { ToDoService } from '../service/to-do.service';
@Component({
  selector: 'app-to-do-form',
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.scss',
  standalone:true
})
export class ToDoFormComponent {

  private initialDate =  new Date().toISOString().split('T')[0]
  toDoForm:FormGroup;

  constructor(private toDoService:ToDoService){

    this.toDoForm = new FormGroup({ name: new FormControl('abc',[Validators.required]),
      dueDate:new FormControl(this.initialDate,[Validators.required]),
      isCompleted:new FormControl(false)})
  }

  save(){
      const {name,dueDate,isCompleted} = this.toDoForm.value;
      const date = new Date(dueDate);
      date.setDate(date.getDate() + 1);

      const task:TaskType ={
        name:name,
        dueDate:new Date(date).getTime(),
        isCompleted:isCompleted,
        id:Date.now()
      }
      this.toDoService.addTask(task);
  }
}
