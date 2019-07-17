/*!
 * GraphiteTabs.js v1.0.2
 * undefined
 *
 * Copyright 2015-present Carl Wood
 * Released under the ISC license
 *
 * Date: 2019-06-06T15:07:37.825Z
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.GraphiteTabs = factory());
}(this, function () { 'use strict';

    class graphiteTabs {
      constructor() {
        this.init();
      }

      init() {
        console.log('hey');
      }

    }

    return graphiteTabs;

}));
