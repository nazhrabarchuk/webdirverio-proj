import { HtmlElement } from "../element.wrapper.js";

class Input extends HtmlElement{
    async setValue(value){
        console.log(`Enter "${value}" into "${this.elementName}" ${this.constructor.name}`);
        await this.wdioElementInstance.click();
    }
    async clearValue() {
        await this.wdioElementInstance.clearValue();
    }
}

export {Input};