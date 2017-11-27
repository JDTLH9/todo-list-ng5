import { Task } from '../models/task';

export class StaticTaskData {
    static initialTasks() {
        return [
            new Task(1, 'ironing', true),
            new Task(2, 'cleaning', false),
            new Task(3, 'shopping', false),
            new Task(4, 'walk the dog', false),
            new Task(5, 'feed cats', false),
            new Task(6, 'painting', false),
            new Task(7, 'book restaurant', true),
            new Task(8, 'order gift', false)
        ];
    }
}
