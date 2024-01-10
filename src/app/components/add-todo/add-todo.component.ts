import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/services/todo.service';
import { ToDoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  constructor(private todoService: TodoService) {}

  onAddTodo(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const newToDoItem = new ToDoItem(
      // Remove the null for id since it's now optional and will be set by the server
      form.value.title,
      form.value.description,
      new Date(form.value.dueDate),
      false,
    );
    this.todoService.createToDoItem(newToDoItem).subscribe(
      (todoItem) => {
        console.log('ToDo Item Created:', todoItem);
        form.reset();
      },
      (error) => {
        console.error('Error creating ToDo Item:', error);
      },
    );
  }
}
