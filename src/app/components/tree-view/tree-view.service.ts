import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TreeViewService {
  private selectedValue = null;

  public onSelect = new EventEmitter();

  constructor() { }

  get selectedItem() {
    return this.selectedValue;
  }

  set selectedItem(val) {
    this.selectedValue = val;
  }

}
