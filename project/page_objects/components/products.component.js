import TextView from "../../../framework/elements/controls/text.view.control.js";


export default class ProductsComponent{

    async getItemProductButton(number){
        return new TextView($(`.mat-grid-tile:nth-child(${number}) button`), 'Product item "add to basket" button');
    }

    async addItemProductToBasket(number){
        await (await this.getItemProductButton(number)).click();
    }

}