import { Component, Input, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';
import { TreeViewService } from './tree-view.service';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit, OnChanges {
  public closed = true;

  private selected = null;

  @Input() treeSize = 0;
  @Input() data = [];
  @Input() selectedId = null;

  constructor(
    private service: TreeViewService
  ) { }

  ngOnInit() {
    this.treeSize++;

    this.getSelected();

    if (this.data && this.data.length) {
      this._setSelected(this.data, this.selectedId);
      this.data.forEach(item => item.closed = item.closed !== false ? true : false);
    }
  }

  ngOnChanges(changes) {
    if (changes && changes.selectedId) {
      this._closeAll(this.data);
      this._setSelected(this.data, changes.selectedId.currentValue);
    }
  }

  getSelected() {
    this.selected = this.service.selectedItem;
    this.service.onSelect.subscribe(res => {
      this.selected = res;
    });
  }

  onItemSelect(item) {
    if (item) {
      if (this.service.selectedItem === item) {
        this.service.selectedItem = null;
      } else {
        this.service.selectedItem = item;
      }

      this.service.onSelect.next(this.service.selectedItem);
    }
  }

  private _closeAll(list) {
    list.forEach(node => {
      node.closed = true;
      if (node.children) {
        this._closeAll(node.children);
      }
    });
  }

  private _setSelected(data, id) {
    if (id) {
      data.forEach(item => {
        if (this._compare(item.id, id)) {
          this.service.onSelect.next(item);
        } else if (this._checkNodeChildren(item, id)) {
          item.closed = false;
        }
      });
    }
  }

  private _checkNodeChildren(node, id) {
    let result = false;

    if (node.children) {
      const found = node.children.find(child => this._compare(child.id, id));

      if (found) {
        node.closed = false;
        this.service.onSelect.next(found);
        return true;
      } else {
        node.children.forEach(ch => {
          result = result || this._checkNodeChildren(ch, id);
        });
      }
    }

    return result;
  }

  private _compare(val1, val2) {
    return String(val1) === String(val2);
  }

}
