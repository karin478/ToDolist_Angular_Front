export class ToDoItem {
  id?: number; // Make the id optional
  title: string;
  description?: string;
  dueDate: Date;
  isCompleted: boolean;

  constructor(
    title: string,
    description: string = '', // Provide a default value
    dueDate: Date,
    isCompleted: boolean = false, // Provide a default value
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
  }
}
