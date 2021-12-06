import  HtmlElement  from "../element.wrapper.js";

export default class Dropdown extends HtmlElement {
    async open() {
        console.log(`Opening ${this.constructor.name} "${this.elementName}"`);
        await this.click();
    }

    async select(option){
        await this.open();
    }
}


