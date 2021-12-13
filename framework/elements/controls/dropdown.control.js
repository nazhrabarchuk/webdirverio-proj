import  HtmlElement  from "../element.wrapper.js";
import Button from "../controls/button.control.js";

export default class Dropdown extends HtmlElement {
    async open() {
        await this.wdioElement.click();
    }

    async select(option){
        await this.wdioElement.click();
        await new Button(await $(`//*[@class="mat-option-text"][contains(text(),"${option}")]`), `Question "${option}"`).click();
    }

    async selectItemByLabelValue(itemText) {
        await this.open();
        const locator = `${await this.locator}/option[@value='${itemText}']`;
        await (new Button(await $(locator), `Item ${itemText}`)).click();
    }
}


