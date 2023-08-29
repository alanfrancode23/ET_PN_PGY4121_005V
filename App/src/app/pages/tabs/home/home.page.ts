import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateTaskComponent } from 'src/app/shared/components/add-update-task/add-update-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tasks: Task[] = [{
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    items: [
      { name: 'Item 1', completed: true },
      { name: 'Item 2', completed: true },
      { name: 'Item 3', completed: false },
      { name: 'Item 4', completed: false },
    ]
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    items: [
      { name: 'Item 1', completed: true },
      { name: 'Item 2', completed: true },
      { name: 'Item 3', completed: true },
      { name: 'Item 4', completed: false }
    ],
  }];

  constructor(
    private firebaseSrv: FirebaseService,
    private utilsSvc: UtilsService,
  ) { }

  ngOnInit() {
    this.addOrUpdateTask();
  }

  getPercentage(task: Task){
    return this.utilsSvc.getPercentage(task);
  }

  addOrUpdateTask(task?: Task){
    this.utilsSvc.presentModal({
      component: AddUpdateTaskComponent,
      componentProps: { task },
      cssClass: 'add-update-modal'
    });
  }
}
