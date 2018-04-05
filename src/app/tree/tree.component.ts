import { Component, OnInit } from '@angular/core';
import { TreeViewService } from '../components/tree-view/tree-view.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  public selectedId = null;
  public selected = null;
  public data;

  constructor(
    private service: TreeViewService
  ) {}

  ngOnInit() {
    this.data = this._generateData();
    this.service.onSelect.subscribe(res => {
      this.onItemSelect(res);
    });
  }

  onItemSelect(item) {
    console.log('Select');
    console.log(item);
    this.selected = item;
  }

  onDelete(item) {
    console.log('Delete');
    console.log(item);
  }

  onCopy(item) {
    console.log('Copy');
    console.log(item);
  }

  getSelected() {
    if (this.selected) {
      // console.log(JSON.stringify(this.selected, null, 2));
      return JSON.stringify(this.selected, null, 2);
    }

    return '';
  }

  private _generateData() {
    return Array.apply(null, Array(5)).map((item, index) => {
      return {
        name: `Node ${index}`,
        icon: 'account_circle',
        actions: [
          {callback: this.onDelete, icon: 'delete'},
          {callback: this.onCopy, icon: 'content_copy'}
        ],
        children: Array.apply(null, Array(5)).map((child, i) => {
          return {
            name: `Node ${i}`,
            icon: 'dns',
            actions: [
              {callback: this.onDelete, icon: 'delete'},
              {callback: this.onCopy, icon: 'content_copy'}
            ],
            children: Array.apply(null, Array(5)).map((c, ind) => {
              return ({
                name: `Child ${ind}`, icon: 'play_circle_outline',
                id: ind === 0 && i === 2 && index === 3 ? this.selectedId : new Date().getTime()
              });
            })
          };
        })
      };
    });
  }
}
