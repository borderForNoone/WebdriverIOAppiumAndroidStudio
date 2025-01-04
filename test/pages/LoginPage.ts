import BasePage from "./BasePage.js";

class LoginPage extends BasePage {
    get emailInputField(): WebdriverIO.Element {
        return $('~input-email') as ChainablePromiseElement;
    }

    get passwordInputField(): WebdriverIO.Element {
        return $('~input-password') as ChainablePromiseElement;
    }

    get loginSubmitBtn(): WebdriverIO.Element {
        return $('~button-LOGIN') as ChainablePromiseElement;
    }

    get loginSuccessMsg(): WebdriverIO.Element {
        return $('//android.widget.TextView[@text="You are logged in!"]') as ChainablePromiseElement;
    }

    get invalidEmailMsg(): WebdriverIO.Element {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]') as ChainablePromiseElement;
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailInputField.setValue(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInputField.setValue(password);
    }

    async clickLoginSubmitBtn(): Promise<void> {
        await this.loginSubmitBtn.click();
    }

    async login(email: string, password: string): Promise<void> {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginSubmitBtn();
    }

    async assertLoginSuccessMsgVisible(): Promise<void> {
        await expect(this.loginSuccessMsg).toBeDisplayed();
    }

    async assertInvalidEmailMsgVisible(): Promise<void> {
        await expect(this.invalidEmailMsg).toBeDisplayed();
    }
}

export default new LoginPage();
