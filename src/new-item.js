import {TodoItems} from 'services/todo-items';

export class NewItem {
  static inject = [TodoItems];
  value;
  constructor(todoitems) {
    this.items = todoitems.items;
  }
  keyPressed($event) {
    if($event.which === 13) {
      this.addItem(this.value);
    }
  }
  addItem(input) {
    this.items.push({
      text: this.value,
      completed: false
    })
    this.value = '';
  }
}
