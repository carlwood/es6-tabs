/*!
 * GraphiteTabs.js v1.0.11
 * https://github.com/carlwood/es6-tabs
 *
 * Copyright 2019-present Carl Wood
 * Released under the ISC license
 *
 * Date: 2019-07-24T15:45:04.296Z
 */

const DefaultProps = {
  tabPanes: '.tab-pane',
  activeTabPaneClass: 'is-active'
};

/**
 * Validates an object of options with the valid default props object
 */
function validateOptions(options, defaultProps) {
  Object.keys(options).forEach(option => {
    if (!defaultProps.hasOwnProperty(option)) {
      throw new Error(`[graphite-tabs]: \`${option}\` is not a valid option`);
    }
  });
}

class graphiteTabs {
  constructor(selector, config) {
    validateOptions(config || {}, DefaultProps);
    this.tabButtons = document.querySelectorAll(selector);

    if (!this.tabButtons.length) {
      throw Error(`[graphite-tabs]: Cannot find tab buttons selector, '${selector}'`);
    }

    this.props = {
      tabPanes: config.tabPanes || DefaultProps.tabPanes,
      activeTabPaneClass: config.activeTabPaneClass || DefaultProps.activeTabPaneClass
    };
    this.tabPanes = document.querySelectorAll(this.props.tabPanes);
  }

  init() {
    if (!this.tabButtons) {
      throw Error(`[graphite-tabs]: Cannot find tab buttons: ${this.tabButtons}`);
    }

    if (this.tabButtons) {
      this.tabButtons.forEach(button => {
        button.addEventListener('click', event => {
          event.preventDefault();
          this.hideTabs();
          this.showTab(button);
        });
      });
    }
  }

  showTab(button) {
    this.button = button;
    this.targetTabPane = document.querySelector(`#${this.button.getAttribute('aria-controls')}`);

    if (!this.button) {
      throw Error(`[graphite-tabs]: Cannot find tab button, ${this.button}`);
    }

    if (!this.targetTabPane) {
      throw Error('[graphite-tabs]: Cannot find target tab pane from tab button aria-controls');
    }

    this.button.setAttribute('aria-selected', 'true');
    this.targetTabPane.classList.add(this.props.activeTabPaneClass);
  }

  hideTabs() {
    if (!this.tabPanes.length) {
      throw Error(`[graphite-tabs]: Cannot find tab panes with selector '${this.props.tabPanes}'`);
    } // Hide any opened tabs and toggle aria state of button


    for (let i = 0; i < this.tabButtons.length; i += 1) {
      this.tabButtons[i].setAttribute('aria-selected', 'false');
      this.tabPanes[i].classList.remove(this.props.activeTabPaneClass);
    }
  }

}

export default graphiteTabs;
