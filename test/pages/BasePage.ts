import { browser } from '@wdio/globals'

export default class Page {
    get loginBtn() {
        return $('~Login');
    }
    get formsBtn() {
        return $('~Forms');
    }
    get swipeBtn() {
        return $('~Swipe');
    }
    get dragBtn() {
        return $('~Drag');
    }
    get alertOKBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    async openLoginTab() {
        await this.loginBtn.click();
        await browser.pause(500);
    }
    async openFormsTab() {
        await this.formsBtn.click();
        await browser.pause(500);
    }
    async openSwipeTab() {
        await this.swipeBtn.click();
        await browser.pause(500);
    }
    async openDragTab() {
        await this.dragBtn.click();
        await browser.pause(500);
    }
    async clickAlertOKBtn() {
        await this.alertOKBtn.click();
        await browser.pause(500);
    }
}
