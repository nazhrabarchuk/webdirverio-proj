
export class BasePage {
      async open(path){
        browser.url(path);
    }

  //   async waitForScreenAvailable() {
  //     await  this.getBaseElement().waitForDisplayed();
  // }
}

