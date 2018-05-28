import { Component, OnInit } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {
      uid: '',
      title: 'Angurson',
      done: false
    },
    {
      uid: '',
      title: 'Firebaserson',
      done: false
    }
  ];

  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onPerformTask(task: Task): void {
    console.log(task);
  }

}
