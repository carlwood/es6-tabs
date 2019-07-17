import { DefaultProps } from './Props';
import {
    validateOptions,
} from './Utils'

class graphiteTabs {
    constructor(selector, config) {
        validateOptions(config || {}, DefaultProps);

        this.tabLinks = document.querySelectorAll(selector);
        // Props = {
        //     activeClass: config.activeClass || 'is-active',
        //     tabPanes: config.tabPanes || '.tab-pane'
        // };

        this.tabPanes = document.querySelectorAll(DefaultProps.tabPanes);
    }

    init() {
        if (this.tabLinks) {
            this.tabLinks.forEach((link) => {
                link.addEventListener('click', (event) => {
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


export default graphiteTabs;
