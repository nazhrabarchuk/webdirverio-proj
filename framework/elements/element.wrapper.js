
export default class HtmlElement{
    constructor(wdioElement, name){
        this.wdioElement = wdioElement ;
        this.elementName = name;
    }

    // get elementName(){
    //     return this.elementName;
    // }
    //
    // get wdioElementInstance() {
    //     return this.wdioElement;
    // }

    async getElement(elementType, elementLocator,elementName) {
        return new elementType(`$(${elementLocator})`, elementName);
    }

    async isExisting() {
        // await this.waitForDisplayed();
       return await this.wdioElement.isExisting();
    }
    
    async click() {
        console.log( `Click on "${this.elementName}"`);  
        await this.wdioElement.click();
    }

    async getText() {
        return this.wdioElement.getText();
    }

    async getAttribute(atr){
        console.log( `Get attribute: ${atr} of "${this.elementName}"`);  
        return this.wdioElement.getAttribute(atr);
    }

      async waitForDisplayed(){
        await (async () => {
          return this.wdioElement.isDisplayed();
      });
      }

 
}
