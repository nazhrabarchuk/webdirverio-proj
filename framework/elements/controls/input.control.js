import  HtmlElement  from "../element.wrapper.js";

export default class Input extends HtmlElement{
    async setValue(value){
        console.log(`Enter "${value}" into "${this.elementName}" ${this.constructor.name}`);
        await this.wdioElement.setValue(value);
    }
    async clearValue() {
        await this.wdioElement.clearValue();
    }
}
