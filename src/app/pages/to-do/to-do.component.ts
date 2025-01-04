import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { combineLatest, debounceTime, fromEvent, Subject, takeUntil } from 'rxjs';
import { ToDoService } from './service/to-do.service';

@Component({
  selector: 'app-to-do',
  imports: [ToDoFormComponent,ToDoListComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
  standalone:true
})
export class ToDoComponent{


  @ViewChild('filterText') filter!:ElementRef<HTMLInputElement>
  private unsubscribeSubject:Subject<boolean> = new Subject();
  private toDoService = inject(ToDoService);

  ngAfterViewInit(): void {
    fromEvent(this.filter.nativeElement,'keyup')
    .pipe(debounceTime(2000),takeUntil(this.unsubscribeSubject))
    .subscribe(()=> this.toDoService.updateSearch(this.filter.nativeElement.value) )
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next(true);    
  }
}
