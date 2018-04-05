import { Injectable } from '@angular/core';

@Injectable()
export class TreeViewService {
  private selectedValue = null;

  constructor() { }

  get selectedItem() {
    return this.selectedValue;
  }

  set selectedItem(val) {
    this.selectedValue = val;
  }
}
