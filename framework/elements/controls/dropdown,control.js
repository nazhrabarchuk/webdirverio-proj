import { HtmlElement } from "../element.wrapper";

class Dropdown extends HtmlElement {
    async open() {
        console.log(`Opening ${this.constructor.name} "${this.elementName}"`);
        await this.click();
    }
}

export {Dropdown};