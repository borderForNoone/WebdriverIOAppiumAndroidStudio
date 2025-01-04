import BasePage from "./BasePage.js";

class FormsPage extends BasePage {
    get textInput () {
        return $('~text-input');
    }

    get textInputResult () {
        return $('~input-text-result');
    }

    get switch () {
        return $('~switch');
    }

    get switchText () {
        return $('~switch-text');
    }

    get dropdown () {
        return $('//android.widget.EditText[@text="Select an item..."]');
    }

    get activeBtn () {
        return $('~button-Active');
    }

    get activeBtnAlertText () {
        return $('//android.widget.TextView[@text="This button is active"]');
    }

    get activeBtnAlertOKBtn () {
        return $('~button-OK'); 
    }
    
    async enterText (text: string): Promise<void> {
        await this.textInput.setValue(text); 
    }

    async assertEnteredTextIsEqual (text: string): Promise<void> {
        await expect(this.textInputResult).toHaveText(text);
    }

    async clickSwitch (): Promise<void> {
        await this.switch.click();
    }

    async assertSwitchTextIsOn (): Promise<void> {
        await expect(this.switchText).toHaveText("Click to turn the switch OFF");
    }

    async selectDropdownItemAndVerify (itemText: string): Promise<void> {
        await this.dropdown.click();
        await $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${itemText}"]`).click();
        await expect($(`//android.widget.EditText[@text="${itemText}"]`)).toBeDisplayed();
    }

    async clickActiveBtn (): Promise<void> {
        await this.activeBtn.click();
    }

    // Click the OK button on the alert
    async clickActiveBtnAlertOKBtn (): Promise<void> {
        await this.activeBtnAlertOKBtn.click();
    }

    async assertActiveBtnAlertTextVisible (): Promise<void> {
        await expect(this.activeBtnAlertText).toBeDisplayed();
    }
}

export default new FormsPage();