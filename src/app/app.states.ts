import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';

export const appState = {
  name: 'app',
  component: AppComponent
};

export const treeState = {
  parent: 'app',
  name: 'tree',
  url: '/tree',
  component: TreeComponent
};

export const APP_STATES = [
  appState,
  treeState
];
