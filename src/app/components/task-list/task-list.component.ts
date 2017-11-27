import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  private tasks: BehaviorSubject<Task[]>;
  taskDescription: string;

  addtask(description: string) {
    const arr: Task[] = [];

    // this.tasks.forEach((item) => {
    //   arr.push(new Task(1, item.description));
    // });

    this.tasks.next(arr);
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}
