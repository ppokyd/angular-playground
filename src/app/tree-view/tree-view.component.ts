import { Component, Input, OnInit } from '@angular/core';
import { TreeViewService } from './tree-view.service';

@Component({
  selector: 'app-tree-view',
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
    this.selected = this.service.selectedItem;

    if (this.data && this.data.length) {
      this._setSelected(this.data, this.selectedId);
      this.data.forEach(item => item.closed = item.closed !== false ? true : false);
    }
  }


  onItemSelect(item) {
    if (this.selected === item) {
      this.selected = null;
    } else {
      this.selected = item;
    }
  }

  private _setSelected(data, id) {
    if (id) {
      data.forEach(item => {
        if (item.id === id) {
          item.selected = true;
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
        found.selected = true;
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
