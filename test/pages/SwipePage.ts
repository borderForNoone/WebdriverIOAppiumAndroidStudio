import BasePage from "./BasePage";

class SwipePage extends BasePage {
    get swipePageTitle () {
        return $('//android.widget.TextView[@text="Swipe horizontal"]');
    }
    get secretLogo () {
        return $('~WebdriverIO logo');
    }
    get firstSliderItem () {
        return $('//android.widget.TextView[@text="WebdriverIO is fully open source and can be found on GitHub"]');
    }
    get thirdSliderItem () {
        return $('//android.widget.TextView[@text="The JS Foundation is host to projects that span the entire JavaScript ecosystem."]');
    }

    async swipe(startPercentageX: number, startPercentageY: number, endPercentageX: number, endPercentageY: number, speed = 100) {
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
    async assertFirstSliderItemVisible () {
        await expect(this.firstSliderItem).toBeDisplayed();
    }
    async assertThirdSliderItemVisible () {
        await expect(this.thirdSliderItem).toBeDisplayed();
    }
    async assertTopPageTitleVisible () {
        await expect(this.swipePageTitle).toBeDisplayed();
    }
    async assertBottomSecretLogoVisible () {
        await expect(this.secretLogo).toBeDisplayed();
    }
}

export default new SwipePage();