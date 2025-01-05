import { browser } from '@wdio/globals'

export default class Page {
    get webvieBtn() {
        return $('//*[@content-desc="Webview"]');
    }
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
    async openWebvieTab() {
        await this.webvieBtn.click();
        await browser.pause(500);
    }
    async clickAlertOKBtn() {
        await this.alertOKBtn.click();
        await browser.pause(500);
    }

    async swipe(startPercentageX: number, startPercentageY: number, endPercentageX: number, endPercentageY: number, speed: number) {
        const { width, height } = await driver.getWindowRect();
    
        const startX = Math.floor(width * startPercentageX);
        const startY = Math.floor(height * startPercentageY);
        const endX = Math.floor(width * endPercentageX);
        const endY = Math.floor(height * endPercentageY);
    
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: speed, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }
}
