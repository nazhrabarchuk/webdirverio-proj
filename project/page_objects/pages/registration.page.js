import { BasePage } from "../../../framework/elements/base.page.js";
import Dropdown from "../../../framework/elements/controls/dropdown.control.js";
import Input from "../../../framework/elements/controls/input.control.js";

class RegistrationPage extends BasePage{

    get registrationEmailInput(){
        return new Input($('#emailControl'), 'Registration email input');
    }
    get registrationPasswordInput(){
        return new Input($('#passwordControl'), 'Registration password input');
    }
    get registrationRepeatEmailInput(){
        return new Input($('#repeatPasswordControl'), 'Registration repeat password input');
    }
    get registrationSecurityAnswerInput(){
        return new Input($('#securityAnswerControl'), 'Registration secutiry answer input');
    }

    get questionDropdown(){
        return new Dropdown($('[name="securityQuestion"]'), 'Security question');
    }

    async selectQuestion(text){
        await this.questionDropdown.select(text);
    }

    async setSecurityAnswer(value){
        await this.registrationSecurityAnswerInput.setValue(value);
    }
}

export default new RegistrationPage();