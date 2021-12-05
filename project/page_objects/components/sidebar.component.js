
export class SidebarComponent{
    
    get aboutUsLink(){
        return $('a[href="#/about"]')
    }

    async clickAboutUsLink(){
        await this.aboutUsLink.click();
    }
}