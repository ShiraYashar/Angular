import { Component, input } from '@angular/core';
import { TaskModel, UserModel } from '../models';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  user = input.required<UserModel>();
  tasks = input<TaskModel[]>([]);
}
