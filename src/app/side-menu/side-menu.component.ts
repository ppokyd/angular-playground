import { Component, OnInit, ElementRef } from '@angular/core';
import { StateService, TransitionService } from '@uirouter/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public hovered = false;
  public pinned = false;
  public sections;
  public activeSection;

  constructor(
    private stateService: StateService,
    private transitions: TransitionService,
    private element: ElementRef
  ) { }

  ngOnInit() {
    const states = this.getStates();
    const sections = this.filterSections(states);

    this.sections = sections.map(s => {
      s.items = this.filterSubSections(states, s.name);
      return s;
    });

    this.transitions.onSuccess({}, () => {
      this.getActiveSection();
    });
  }

  go(name) {
    this.stateService.go(name);
  }

  stateIs(name) {
    return name === this.stateService.current.name.split('.')[0];
  }

  getActiveSection() {
    this.activeSection = this.sections.find(s => {
      return s.items.find(i => this.stateIs(i.name));
    });
  }

  getStates() {
    const states = this.stateService.get();
    // filter root route and sub-section child routes.
    return states.filter(s => s.name && s.name.indexOf('.') === -1);
  }

  filterSections(states) {
    return states
      .filter(s => !s.parent)
      .sort((a, b) => this.getMenuIndex(a) - this.getMenuIndex(b));
  }

  filterSubSections(states, name) {
    return states
      .filter(s => s.parent === name)
      .sort((a, b) => this.getMenuIndex(a) - this.getMenuIndex(b));
  }

  getMenuIndex(item) {
    return ((item.data || {}).menu || {}).index;
  }

  selectSection(section) {
    this.activeSection = section;
  }

  pin() {
    this.pinned = !this.pinned;

    this.adjustMainContainer(this.pinned);
  }

  hoverMenu() {
    if (this.pinned === false) {
      this.hovered = !this.hovered;
    }
  }

  adjustMainContainer(pinned) {
    const parent = this.element.nativeElement.parentNode;
    const container = parent.querySelector('.main-view');

    if (container) {
      container.style.transition = 'padding 0.3s ease-in-out';
      container.style.paddingLeft = pinned ? '215px' : '15px';
    }
  }
}
