import { TaskDialogComponent } from './../task-dialog/task-dialog.component';
import { Observable } from 'rxjs/Observable';
import { TaskService } from './../task.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Task } from '../models/task.model';
import { MatDialog, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  tasks$: Observable<Task[]>;

  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void  {
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerformTask(task: Task): void {
    task.done = !task.done;
    this.taskService.update(task);
  }

  showDialog(): void {
    this.dialog.open(TaskDialogComponent);
  }
  openMenu(): void {
    this.trigger.openMenu();
  }
}
