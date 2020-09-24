# Graphite tabs

**IN DEVELOPMENT.**
**USE WITH CAUTION!**

Simple vanilla ES6 JavaScript implementation of tabs.

This plugin toggles the aria-selected state of your tabs, shows the correct tab pane while hiding any others.

## Getting started

Install with NPM:
```
npm install graphite-tabs --save
```

## Usage


### HTML
#### Tab links
* Set up your tab links as buttons
* On each button, use an `aria-selected="false"` attribute
* Ensure one tab button is selected by default using `aria-selected="true"`
* Ensure each tab button `aria-controls` points to the correct tab-pane `id`.

```
<button role="tab" class="tabs__button" id="tab1-tab" data-toggle="tab" aria-controls="tab1" aria-selected="true">Tab 1</button>
<button role="tab" class="tabs__button" id="tab2-tab" data-toggle="tab" aria-controls="tab2" aria-selected="false">Tab 2</button>
```

#### Tab panes
* Ensure each tab pane has an `id` that matches the tab button `aria-controls` attribute. This is how the plugin shows/hide tabs.
* Each tab pane should have an `aria-labelledby` attribute that matches its corresponding tab button `id`
```
<div class="tab-content">
    <div class="tab-pane is-active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
        <p>Hi, I'm tab 1!</p>
    </div>
    <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
        <p>Hi, I'm tab 2!</p>
    </div>
</div>
```

### JS

#### Basic usage

Import `graphite-tabs`
```
import Tabs from 'graphite-tabs';
```

Call the tabs. The constructor takes two arguments:
* Selector for tab buttons (STRING)
* Optional config (OBJECT)

e.g.
```
const tabs = new Tabs('[data-toggle="tab"]', {
    tabPanes: '.tab-pane',
    activeTabPaneClass: 'is-active',
});

tabs.init();
```

#### Config
If you don't set a config, the plugin will use a default config file:

```
{
    tabPanes: '.tab-pane',
    activeTabPaneClass: 'is-active',
}
```

You can override the config file by setting your own:

```
const tabs = new Tabs('.tab-button', {
    tabPanes: '.tab-pane',
    activeTabPaneClass: 'tab-pane--active',
});
```

### CSS
Style active tab buttons using aria-selected boolean:
```
.tabs__button {
    background-color: white;
    color: red;

    &[aria-selected="true"] {
        background-color: red;
        color: white;
    }
}

.tab-pane {
    &:not(.is-active) {
        display: none;
    }
}
```

## Browser Support
* IE11
* Edge
* Chrome
* Firefox
* Safari 5.1+
