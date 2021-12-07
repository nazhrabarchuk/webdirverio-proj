import  HtmlElement  from "../element.wrapper.js";
import Button from "../controls/button.control.js";

export default class Dropdown extends HtmlElement {
    async open() {
        await this.wdioElement.click();
    }

    async select(option){
        await this.open();
       await new Button($(`//*[@class="mat-option-text"][contains(text(),"${option}")]`), `Question "${option}"`).click();
    }
}


