import RandomUser from "../data/RandomUser";
import LoginPage from "../pages/LoginPage";
import FormsPage from "../pages/FormsPage";
import SwipePage from "../pages/SwipePage";
import DragPage from "../pages/DragPage";
import WebviePage from "../pages/WebviePage";

describe('Mobile Demo App Test', () => {
    const randomUser = new RandomUser();

    it('id:1 - Drag and Drop refresh test', async () => {
        await DragPage.openDragTab();
        await DragPage.dragFirstPiece();
        await expect(DragPage.dragPieceL1).not.toBeDisplayed();
        await DragPage.clickRefreshBtn();
        await DragPage.assertDragPiecesVisible();
    });

    it('id:2 - Check Login with valid credentials', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.enterEmail(randomUser.getEmail);
        await LoginPage.enterPassword(randomUser.getPassword);

        await expect(LoginPage.passwordInputField).toHaveAttribute('password', 'true');

        await LoginPage.clickLoginSubmitBtn();
        await LoginPage.assertLoginSuccessMsgVisible();
        await LoginPage.clickAlertOKBtn();
    });

    it('id:3 - Check Login with invalid credentials', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.enterEmail(randomUser.getUsername);
        await LoginPage.enterPassword(randomUser.getPassword);

        await expect(LoginPage.passwordInputField).toHaveAttribute('password', 'true');

        await LoginPage.clickLoginSubmitBtn();
        await LoginPage.assertInvalidEmailMsgVisible();
        await expect(await LoginPage.invalidEmailMsg.getText()).toBe("Please enter a valid email address");
    });

    it('id:4 - Check form elements ', async () => {
        await FormsPage.openFormsTab();
        await FormsPage.enterText(randomUser.getUsername);
        await FormsPage.assertEnteredTextIsEqual(randomUser.getUsername);
        await FormsPage.clickSwitch();
        await FormsPage.assertSwitchTextIsOn();
        await FormsPage.selectDropdownItemAndVerify("webdriver.io is awesome");
        await FormsPage.clickActiveBtn();
        await FormsPage.assertActiveBtnAlertTextVisible();
        await FormsPage.clickAlertOKBtn();
    });

    it('id:5 - Check Swipe test', async () => {
        await SwipePage.openSwipeTab();

        let thirdSliderVisible = false;
        while (!thirdSliderVisible) {
            await SwipePage.swipe(0.8, 0.5, 0.2, 0.5, 100);  
            try {
                await SwipePage.assertThirdSliderItemVisible();
                thirdSliderVisible = true; 
            } catch (error) {
                console.log("Third slider item not visible, continuing swipe...");
            }
        }

        await SwipePage.assertThirdSliderItemVisible();
        await expect(await SwipePage.thirdSliderItem.getText()).toBe("The JS Foundation is host to projects that span the entire JavaScript ecosystem.");

        await SwipePage.swipe(0.2, 0.5, 0.8, 0.5, 100);
        await SwipePage.swipe(0.2, 0.5, 0.8, 0.5, 100);  // Swipe back to the first slider item
        await SwipePage.assertFirstSliderItemVisible();
    });

    it('id:6 - Check Login with empty password', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.enterEmail(randomUser.getUsername);
        await LoginPage.enterPassword('');
        await LoginPage.clickLoginSubmitBtn();
        await expect(await LoginPage.invalidPasswordMsg.getText()).toBe("Please enter at least 8 characters");
    });

    it('id:7 - Check Register with valid values', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.mooveToSignUpForm.click();
        await LoginPage.enterEmail(randomUser.getEmail);
        await LoginPage.enterPassword(randomUser.getPassword);
        await LoginPage.enterConfirmPasswort(randomUser.getPassword);

        await expect(LoginPage.passwordInputField).toHaveAttribute('password', 'true');
        await expect(LoginPage.confirmPasswortInputField).toHaveAttribute('password', 'true');

        await LoginPage.signUpButton.click();
        await expect(await LoginPage.signUpSuccessMsg.getText()).toBe("You successfully signed up!");

        await LoginPage.clickAlertOKBtn();
    });

    it('id:8 - Check Register with invalid values', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.mooveToSignUpForm.click();
        await LoginPage.enterEmail(randomUser.getUsername);
        await LoginPage.enterPassword(randomUser.getPassword);
        await LoginPage.enterConfirmPasswort('');

        await expect(LoginPage.passwordInputField).toHaveAttribute('password', 'true');
        await expect(LoginPage.confirmPasswortInputField).toHaveAttribute('password', 'true');

        await LoginPage.signUpButton.click();
        await expect(await LoginPage.confirmPasswordErrorMsg.getText()).toBe("Please enter the same password");
    });

    it('id:9 - Check Register with empty values', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.mooveToSignUpForm.click();

        await LoginPage.enterPassword("");
        await LoginPage.signUpButton.click();

        await expect(await LoginPage.invalidEmailMsg.getText()).toBe("Please enter a valid email address");
        await expect(await LoginPage.invalidPasswordMsg.getText()).toBe("Please enter at least 8 characters");
        await expect(await LoginPage.confirmPasswordErrorMsg.getText()).toBe("Please enter the same password");
    });

    it('id:10 - Check Webvie Page title', async () => {
        await WebviePage.openWebvieTab();

        await expect(await WebviePage.webviePageTitle.getText()).toBe("Next-gen browser and mobile automation test framework for Node.js");
    });

    it('id:11 - Check Webvie Page get started section title', async () => {
        await WebviePage.openWebvieTab();

        await expect(await WebviePage.webviePageTitle.getText()).toBe("Next-gen browser and mobile automation test framework for Node.js");

        let getStartedButton = false;
        while (!getStartedButton) {
            await SwipePage.swipe(0.2, 0.8, 0.2, 0.7, 100);  // Swipe down
            try {
                await expect(WebviePage.getStartedButton).toBeDisplayed();
                getStartedButton = true; 
            } catch (error) {
                console.log("getStartedButton item not visible, continuing swipe...");
            }
        }

        await WebviePage.getStartedButton.click();
        await expect(await WebviePage.getStartedSectionTitle.getText()).toBe("Getting Started");

        await WebviePage.returnToHomePage.click();
    });

    it('id:12 - Check returning to Webvie Page', async () => {
        await WebviePage.openWebvieTab();

        await expect(await WebviePage.webviePageTitle.getText()).toBe("Next-gen browser and mobile automation test framework for Node.js");

        let getStartedButton = false;
        while (!getStartedButton) {
            await SwipePage.swipe(0.2, 0.8, 0.2, 0.7, 100);  // Swipe down
            try {
                await expect(WebviePage.getStartedButton).toBeDisplayed();
                getStartedButton = true; 
            } catch (error) {
                console.log("getStartedButton item not visible, continuing swipe...");
            }
        }

        await WebviePage.getStartedButton.click();
        await expect(await WebviePage.getStartedSectionTitle.getText()).toBe("Getting Started");

        await WebviePage.returnToHomePage.click();
        await expect(await WebviePage.webviePageTitle.getText()).toBe("Next-gen browser and mobile automation test framework for Node.js");
    });
});