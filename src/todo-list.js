import {inject} from 'aurelia-framework';
import {todoItems} from 'services/todo-items';

@inject(todoItems)
export class TodoList {
  constructor(todoitems) {
    this.items = todoitems.items;
  }
  setCompleted(item) {
    console.log('hey', item.completed)
    item.completed = !item.completed;
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
