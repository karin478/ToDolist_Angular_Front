import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from 'src/app/components/add-todo/add-todo.component';
import { TodoService } from 'src/services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent, // Register the new component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Add FormsModule here
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
