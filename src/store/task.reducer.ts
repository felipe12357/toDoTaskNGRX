import { createReducer, on } from "@ngrx/store";
import { TaskType } from "./task.store.types";
import { addTask, removeTask } from "./task.actions";
import { getLocalStorage, saveLocalStorage } from "../localStorage/localStorareFn";



export interface TaskState {
    taskList: TaskType[];
}

const lastStorage =  getLocalStorage('taskState');

export const initialState: TaskState = {
    taskList: (lastStorage) ? JSON.parse(lastStorage).taskList as TaskType[]:[]
};
  
export const taskReducer = createReducer(
    initialState,
    on(addTask, (state, { task }) =>{
      const newState =  { ...state, taskList: [...state.taskList, task] }
      saveLocalStorage('taskState',JSON.stringify( newState))
      return newState
    }), 
    on(removeTask, (state, { id }) => {
      const newState =  { ...state, taskList: state.taskList.filter((task) => task.id !== id) }
      saveLocalStorage('taskState',JSON.stringify( newState))
      return newState
    })
);