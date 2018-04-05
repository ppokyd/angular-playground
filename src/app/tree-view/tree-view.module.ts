import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view.component';
import { TreeViewService } from './tree-view.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TreeViewComponent,
  ],
  providers: [
    TreeViewService
  ],
  exports: [TreeViewComponent]
})
export class TreeViewModule { }
