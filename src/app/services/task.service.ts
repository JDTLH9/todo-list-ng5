import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Task } from '../models/task';
import { StaticTaskData } from '../data/task-list-initial';

@Injectable()
export class TaskService {
  private tasks: BehaviorSubject<Task[]>;

  getTasks(): BehaviorSubject<Task[]> {
    return this.tasks;
  }

  constructor() {
    this.tasks = new BehaviorSubject(StaticTaskData.initialTasks());
  }
}
