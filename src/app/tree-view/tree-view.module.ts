import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view.component';
import { TreeItemComponent } from './tree-item/tree-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeViewComponent,
    TreeItemComponent
],
  exports: [TreeViewComponent]
})
export class TreeViewModule { }
