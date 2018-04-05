import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TreeViewModule } from './components/tree-view/tree-view.module';

import { routerConfigFn } from './router.config';
import { APP_STATES } from './app.states';

import { TreeComponent } from './tree/tree.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SideMenuComponent
],
  imports: [
    FormsModule,
    BrowserModule,
    TreeViewModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      otherwise: { state: 'app' },
      config: routerConfigFn,
    })
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }
