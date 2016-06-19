import {
  Component,
  ViewEncapsulation,
  Inject,
  ApplicationRef
} from '@angular/core';

import { provideRouter, RouterConfig, ROUTER_DIRECTIVES }
  from '@angular/router';

import { RioAboutPageComponent } from './about-page';
import { RioCounterPageComponent } from './counter-page';

import {
  RioContainerComponent,
  RioNavigatorComponent,
  RioNavigatorItemComponent,
  RioLogoComponent
} from '../components';

const AppRoutes = [{
    path: '',
    component: RioCounterPageComponent
  }, {
    path: 'about',
    component: RioAboutPageComponent
  }
];

const routes: RouterConfig = [
  ...AppRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

@Component({
  selector: 'rio-sample-app',
  directives: [
    ROUTER_DIRECTIVES, RioNavigatorComponent, RioNavigatorItemComponent,
    RioLogoComponent, RioContainerComponent
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <div>
      <rio-navigator>
        <rio-navigator-item [mr]=true>
          <rio-logo></rio-logo>
        </rio-navigator-item>
        <rio-navigator-item [mr]=true>
          <a [routerLink]="['']"
            class="text-decoration-none">Counter</a>
        </rio-navigator-item>
        <rio-navigator-item>
          <a [routerLink]="['about']"
            class="text-decoration-none">About Us</a>
        </rio-navigator-item>
        <div class="flex flex-auto"></div>
      </rio-navigator>
      <rio-container>
        <router-outlet></router-outlet>
      </rio-container>
    </div>
  `
})
export class RioSampleAppComponent {

};
