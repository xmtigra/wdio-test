import { BasePo } from './base.po';

class LoginPo extends BasePo {

    get container() {
        return $('#gc_login_widget_container');
    }

    get loginButtons() {
        return $$('#gc_login_widget_container button');
    }

    get emailField() {
        return $('[name="gc_email"]');
    }

    get passwordField() {
        return $('[name="gc_password"]');
    }

    get continueBtn() {
        return $('[type="submit"]');
    }

    get firstNameField() {
        return $('[name="gc_firstname"]');
    }

    get lastNameField() {
        return $('[name="gc_lastname"]');
    }

    constructor() {
        super();
    }

    public async isOpen(): Promise<void> {
        // await this.waitForElementVisible(this.container);
        // return this.isElementDisplayed(this.container);
    }

    public async goToPasswordScreen(): Promise<void> {
        // await this.clickOnElement(loginPo.continueBtn);
        // await this.waitForElementVisible(this.passwordField);
    }

    public async goToLocationScreen(): Promise<void> {
        // await this.clickOnElement(loginPo.continueBtn);
        // await this.waitForElementVisible(this.firstNameField);
    }

    public async fillEmailField(text: string | number): Promise<void> {
        // await this.typeElementText(this.emailField, text);
    }

    public async fillPasswordField(text: string | number): Promise<void> {
        // await this.typeElementText(this.passwordField, text);
    }

}

export const loginPo = new LoginPo();
