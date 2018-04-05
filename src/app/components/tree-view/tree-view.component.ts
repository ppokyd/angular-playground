import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TreeViewService } from './tree-view.service';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  public closed = true;
  private selected = null;

  @Input() data = [];
  @Input() selectedId = null;

  constructor(
    private service: TreeViewService
  ) { }

  ngOnInit() {
    this.getSelected();

    if (this.data && this.data.length) {
      this._setSelected(this.data, this.selectedId);
      this.data.forEach(item => item.closed = item.closed !== false ? true : false);
    }
  }

  getSelected() {
    this.selected = this.service.selectedItem;
    this.service.onSelect.subscribe(res => {
      this.selected = res;
    });
  }

  onItemSelect(item) {
    if (this.service.selectedItem === item) {
      this.service.selectedItem = null;
    } else {
      this.service.selectedItem = item;
    }

    this.service.onSelect.next(this.service.selectedItem);
  }

  private _setSelected(data, id) {
    if (id) {
      data.forEach(item => {
        if (item.id === id) {
          this.service.selectedItem = item;
        } else if (this._checkNodeChildren(item, id)) {
          item.closed = false;
        }
      });
    }
  }

  private _checkNodeChildren(node, id) {
    let result = false;

    if (node.children) {
      const found = node.children.find(child => child.id === id);

      if (found) {
        node.closed = false;
        this.service.selectedItem = found;
        return true;
      } else {
        node.children.forEach(ch => {
          result = result || this._checkNodeChildren(ch, id);
        });
      }
    }

    return result;
  }

}
