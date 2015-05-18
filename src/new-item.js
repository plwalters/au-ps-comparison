import {inject, customElement} from 'aurelia-framework';
import {todoItems} from 'services/todo-items';

@customElement('new-item')
@inject(todoItems)
export class NewItem {
  value;
  constructor(todoitems) {
    this.items = todoitems;
  }
  keyPressed($event) {
    if($event.which === 13) {
      this.addItem(this.value);
    }
  }
  addItem(input) {
    this.items.push({
      text: input.value,
      completed: false
    })
    this.value = '';
  }
}
