import {TodoItems} from 'services/todo-items';

export class TodoList {
  static inject = [TodoItems];
  constructor(todoitems) {
    this.items = todoitems.items;
  }
  completeAll() {
    var that = this;
    this.items.forEach(item => {
      that.setCompleted(item, true);
    });
  }
  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
