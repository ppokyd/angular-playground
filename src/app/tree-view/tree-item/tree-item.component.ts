import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent implements OnInit {
  public closed = true;

  public selectedItem = null;

  @Input() data = [];
  @Output() selectItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.data) {
      this.data.forEach(item => item.closed = item.closed !== false ? true : false);
    }
  }

  onItemSelect(item) {
    if (this.selectedItem === item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
      this.selectItem.emit(item);
    }
  }

}
