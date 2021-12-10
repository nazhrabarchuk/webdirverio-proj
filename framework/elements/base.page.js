
export class BasePage {
      async open(path){
        await browser.url(path);
    }

    async waitForScreenAvailable(selectorOfElement) {
          return async () =>{
              const element = await $(selectorOfElement);
              return await element.waitForDisplayed();
          }

  }


}

