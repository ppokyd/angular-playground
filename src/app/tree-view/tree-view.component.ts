import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  public data = [];

  constructor() { }

  ngOnInit() {
    this.data = this._generateData();
  }

  onSelect(item) {
    console.log('Select');
    console.log(item);
  }

  onDelete(item) {
    console.log('Delete');
    console.log(item);
  }

  onCopy(item) {
    console.log('Copy');
    console.log(item);
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
              return ({name: `Child ${ind}`, icon: 'play_circle_outline'});
            })
          };
        })
      };
    });
  }
}
