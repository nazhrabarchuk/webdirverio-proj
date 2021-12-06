import {HtmlElement} from './../elements/element.wrapper.js';
export default class BasePage {
      async open(path){
        browser.url(path);
    }

    async waitForScreenAvailable() {
      await  this.getBaseElement().waitForDisplayed();
  }
}

