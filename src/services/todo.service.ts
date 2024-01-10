import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://todolist.lyndonlyu.com';

  constructor(private http: HttpClient) {}

  getToDoItems(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(`${this.apiUrl}/ToDoItems`);
  }

  getToDoItemById(id: number): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${this.apiUrl}/ToDoItems/${id}`);
  }

  createToDoItem(item: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(`${this.apiUrl}/ToDoItems`, item);
  }

  updateToDoItem(id: number, item: ToDoItem): Observable<ToDoItem> {
    return this.http.put<ToDoItem>(`${this.apiUrl}/ToDoItems/${id}`, item);
  }

  deleteToDoItem(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/ToDoItems/${id}`);
  }
}
