import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import '../shims/shims_for_IE';
require('zone.js/dist/zone');

import { enableProdMode, provide } from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { APP_BASE_HREF } from '@angular/common/index';
import { RioSampleAppComponent, APP_ROUTER_PROVIDERS }
  from './containers/sample-app';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  bootstrap(RioSampleAppComponent, [
    APP_ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' })
  ]);
}
