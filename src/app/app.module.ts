import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TreeViewModule } from './tree-view/tree-view.module';

import { routerConfigFn } from './router.config';
import { APP_STATES } from './app.states';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TreeViewModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'app' },
      config: routerConfigFn,
    })
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }
