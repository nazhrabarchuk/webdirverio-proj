import BasePage from "../../../framework/elements/base.page";
import Dropdown from "../../../framework/elements/controls/dropdown.control";
import Input from "../../../framework/elements/controls/input.control";

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

    get quaestionDropdown(){
        return new Dropdown($('#securityAnswerControl'), 'Dropdown question');
    }

    async selectAnswer(text){
        await this.quaestionDropdown.select(text);
    }
}

export default new RegistrationPage();