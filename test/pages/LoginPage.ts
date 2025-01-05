import BasePage from "./BasePage.js";

class LoginPage extends BasePage {
    get emailInputField(): WebdriverIO.Element {
        return $('~input-email') as ChainablePromiseElement;
    }

    get passwordInputField(): ChainablePromiseElement {
        return $('~input-password');
    }

    get loginSubmitBtn(): WebdriverIO.Element {
        return $('~button-LOGIN') as ChainablePromiseElement;
    }

    get loginSuccessMsg(): WebdriverIO.Element {
        return $('//android.widget.TextView[@text="You are logged in!"]') as ChainablePromiseElement;
    }

    get signUpSuccessMsg(): WebdriverIO.Element {
        return $('//*[@resource-id="android:id/message"]') as ChainablePromiseElement;
    }

    get invalidEmailMsg(): WebdriverIO.Element {
        return $('//*[@text="Please enter a valid email address"]') as ChainablePromiseElement;
    }

    get invalidPasswordMsg(): WebdriverIO.Element {
        return $('//*[@text="Please enter at least 8 characters"]') as ChainablePromiseElement;
    }

    get mooveToSignUpForm(): WebdriverIO.Element {
        return $('//*[@text="Sign up"]') as ChainablePromiseElement;
    }

    get signUpButton(): WebdriverIO.Element {
        return $('//*[@content-desc="button-SIGN UP"]') as ChainablePromiseElement;
    }

    get confirmPasswortInputField(): WebdriverIO.Element {
        return $('//*[@content-desc="input-repeat-password"]') as ChainablePromiseElement;
    }

    get confirmPasswordErrorMsg(): WebdriverIO.Element {
        return $('//*[@text="Please enter the same password"]') as ChainablePromiseElement;
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailInputField.setValue(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInputField.setValue(password);
    }

    async enterConfirmPasswort(password: string): Promise<void> {
        await this.confirmPasswortInputField.setValue(password);
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
