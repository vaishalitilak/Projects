import { Component } from "@angular/core";
import { DropEvent } from "ng-drag-drop";


@Component({
    selector:'item-comp',
    templateUrl: 'item.component.html',
})
export class ItemComponent{
  items = [
        {name: 'InputBox', type: 'text', data:'<input type="text" />'},
        {name: 'Button', type: 'submit', data:'<input type="button" value="Submit"/>'},
        {name: 'Dropdown', type: 'vegetable', data:'<h1>hello</h1>'},
        {name: 'Header', type: 'txt', data:'<h1>hello</h1>'}];
  droppedItems = []; 
  onDrop(e: DropEvent) {
    this.droppedItems.push(e.dragData);
    this.removeItem(e.dragData, this.items);
  }
  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}