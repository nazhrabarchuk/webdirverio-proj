import  Button  from "../../../framework/elements/controls/button.control.js";
import  HtmlElement from "../../../framework/elements/element.wrapper.js";


export default class SidebarComponent extends HtmlElement{
    
    get aboutUsLink(){
        return new Button($('a[href="#/about"]'), 'About us link')
    }

    async clickAboutUsLink(){
        await this.aboutUsLink.click();
    }
}