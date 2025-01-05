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