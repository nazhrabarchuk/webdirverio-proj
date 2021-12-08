
export class BasePage {
      async open(path){
        browser.url(path);
    }

    async waitForScreenAvailable(selectorOfElement) {
          return async () =>{
              const element = await $(selectorOfElement);
              return await element.waitForDisplayed();
          }

  }


}

