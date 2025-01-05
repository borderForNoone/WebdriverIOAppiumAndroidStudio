import BasePage from "./BasePage";

class WebviePage extends BasePage {
    get webviePageTitle () {
        return $('//*[@text="Next-gen browser and mobile automation test framework for Node.js"]');
    }

    get getStartedButton() {
        return $('//*[@content-desc="Get Started"]');
    } 

    get getStartedSectionTitle() {
        return $('//*[@text="Getting Started"]');
    } 

    get returnToHomePage() {
        return $('//android.widget.Image[@text="WebdriverIO"]');
    }
}

export default new WebviePage();