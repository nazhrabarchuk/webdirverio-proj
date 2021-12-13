import {BasePage} from "../../../framework/elements/base.page.js";
import * as waits from "../../../framework/helpers/waits.js";
import Image from "../../../framework/elements/controls/image.control.js";
import Input from "../../../framework/elements/controls/input.control.js";
import Button from "../../../framework/elements/controls/button.control.js";
import TextView from "../../../framework/elements/controls/text.view.control.js";

class ProfilePage extends BasePage{
    get profileImg(){
        return new Image($('img.img-rounded'), 'Profile picture');
    }
    get profileNameText(){
        return new TextView($('.img-rounded ~ p'), 'Profile username').getText();
    }
    get profileEmailInput(){
        return new Input($('#email'), 'Profile email input');
    }
    get profileUsernameInput(){
        return new Input($('#username'), 'Profile username input');
    }
    get usernameSubmitButton(){
        return new Button($('#submit'), 'Save/set the user name button submit');
    }

    get profileImageUrlInput(){
        return new Input($('input[name="imageUrl"]'), 'Text field for the profile image link')
    }

    get profileImageUrlSubmitButton(){
        return new Button($('#submitUrl'), 'Include image from link button');
    }

    async setUsername(name){
        allure.addStep("Set new username");
        await this.profileUsernameInput.setValue(name);
        await this.usernameSubmitButton.click();
        await this.profileUsernameInput.clearValue();
    }

    async setImageUrl(url){
        allure.addStep("Set new image url");
        await this.profileImageUrlInput.setValue(url);
        await this.profileImageUrlSubmitButton.click();
    }

    async isProfileImgExisting(){
        return this.profileImg.isExisting();
    }

    async waitForPageAvailable(){
        await waits.waitForDisplayed(await this.profileImg);
    }
}

export default new ProfilePage();