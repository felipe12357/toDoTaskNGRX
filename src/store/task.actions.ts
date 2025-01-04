import { createAction, props } from "@ngrx/store";
import { TaskType } from "./task.store.types";

export const addTask = createAction('[toDoService] Add Task',props<{ task: TaskType }>());
export const removeTask = createAction('[toDoService] Remove Task',props<{ id: number }>());