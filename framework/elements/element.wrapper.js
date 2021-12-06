
class HtmlElement{
    constructor(wdioElement, name){
        this.wdioElement = wdioElement;
        this.elementName = name;
    }

    get elementName(){
        return this.elementName;
    }

    get wdioElementInstance() {
        return this.wdioElement;
    }

    async isExisting() {
        return this.wdioElementInstance.isExisting();
    }
    
    async click() {
        console.log( `Click on ${this.constructor.name} "${this.elementName}" on ${this.wdioElement}`);  
        await this.wdioElementInstance.click();
    }

    async getText() {
        return this.wdioElementInstance.getText();
    }

    async getAttribute(atr){
        console.log( `Get attribute: ${atr} of "${this.elementName}"`);  
        return this.wdioElementInstance.getAttribute(atr);
    }


 
}

export {HtmlElement};