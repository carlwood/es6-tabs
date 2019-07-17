/*!
 * GraphiteTabs.js v1.0.7
 * undefined
 *
 * Copyright 2015-present Carl Wood
 * Released under the ISC license
 *
 * Date: 2019-06-07T10:03:49.597Z
 */

'use strict';

const DefaultProps = {
  activeClass: 'is-active',
  tabPanes: '.tab-pane'
};

/**
 * Validates an object of options with the valid default props object
 */
function validateOptions(options, defaultProps) {
  Object.keys(options).forEach(option => {
    if (!hasOwnProperty(defaultProps, option)) {
      throw new Error(`[graphite-tabs]: \`${option}\` is not a valid option`);
    } else {
      console.log(`all good with ${option}`);
    }
  });
}

class graphiteTabs {
  constructor(selector, config) {
    validateOptions(config || {}, DefaultProps);
    this.tabLinks = document.querySelectorAll(selector); // Props = {
    //     activeClass: config.activeClass || 'is-active',
    //     tabPanes: config.tabPanes || '.tab-pane'
    // };

    this.tabPanes = document.querySelectorAll(DefaultProps.tabPanes);
  }

  init() {
    if (this.tabLinks) {
      this.tabLinks.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          this.hideTabs();
          this.showTab(link);
        });
      });
    }
  }

  showTab(link) {
    this.link = link;
    if (!this.link.hash) return;
    this.targetTab = document.querySelector(this.link.hash);
    this.targetTab.classList.add(DefaultProps.activeClass);
    this.link.setAttribute('aria-selected', 'true');
  }

  hideTabs() {
    // Hide any opened tabs and toggle aria state of link
    for (let i = 0; i < this.tabLinks.length; i += 1) {
      this.tabLinks[i].setAttribute('aria-selected', 'false');
      this.tabPanes[i].classList.remove(DefaultProps.activeClass);
    }
  }

}

module.exports = graphiteTabs;
