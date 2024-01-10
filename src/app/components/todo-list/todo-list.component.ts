import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/models/todo-item.model';
import { TodoService } from 'src/services/todo.service';
import { NgForm } from '@angular/forms'; // Make sure to import NgForm

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  toDoItems: ToDoItem[] = [];
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadToDoItems();
  }

  loadToDoItems() {
    this.todoService.getToDoItems().subscribe((items) => {
      this.toDoItems = items;
    });
  }

  addNewTask() {
    if (!this.newTask.trim()) return;
    const newItem = new ToDoItem(this.newTask, '', new Date(), false);
    this.todoService.createToDoItem(newItem).subscribe((item) => {
      this.toDoItems.push(item);
      this.newTask = ''; // Reset the input field
    });
  }

  deleteItem(id?: number) {
    if (id == null) {
      console.error('Cannot delete an item without an id');
      return;
    }
    if (confirm('Are you sure you want to delete this item?')) {
      this.todoService.deleteToDoItem(id).subscribe(() => {
        this.toDoItems = this.toDoItems.filter((item) => item.id !== id);
      });
    }
  }
}
