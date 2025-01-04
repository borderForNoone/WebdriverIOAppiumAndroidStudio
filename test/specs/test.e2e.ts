import RandomUser from "../data/RandomUser";
import LoginPage from "../pages/LoginPage";
import FormsPage from "../pages/FormsPage";
import SwipePage from "../pages/SwipePage";
import DragPage from "../pages/DragPage";

describe('Mobile Demo App Test', () => {
    const randomUser = new RandomUser();

    it('Login with valid credentials', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.enterEmail(randomUser.getEmail);
        await LoginPage.enterPassword(randomUser.getPassword);
        await LoginPage.clickLoginSubmitBtn();
        await LoginPage.assertLoginSuccessMsgVisible();
        await LoginPage.clickAlertOKBtn();
    });

    it('Login with invalid credentials', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.enterEmail(randomUser.getUsername);
        await LoginPage.enterPassword(randomUser.getPassword);
        await LoginPage.clickLoginSubmitBtn();
        await LoginPage.assertInvalidEmailMsgVisible();
        expect(await LoginPage.invalidEmailMsg.getText()).toBe("Please enter a valid email address");
    });

    it('Form elements test', async () => {
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

    it('Swipe test', async () => {
        await SwipePage.openSwipeTab();

        let thirdSliderVisible = false;
        while (!thirdSliderVisible) {
            await SwipePage.swipe(0.8, 0.5, 0.2, 0.5);  
            try {
                await SwipePage.assertThirdSliderItemVisible();
                thirdSliderVisible = true; 
            } catch (error) {
                console.log("Third slider item not visible, continuing swipe...");
            }
        }

        await SwipePage.assertThirdSliderItemVisible();
        expect(await SwipePage.thirdSliderItem.getText()).toBe("The JS Foundation is host to projects that span the entire JavaScript ecosystem.");

        // Additional actions
        await SwipePage.swipe(0.2, 0.5, 0.8, 0.5);  // Swipe back to the first slider item
        await SwipePage.assertFirstSliderItemVisible();
        await SwipePage.swipe(0.2, 0.8, 0.2, 0.1);  // Swipe down
        await SwipePage.assertBottomSecretLogoVisible();
        await SwipePage.swipe(0.2, 0.1, 0.2, 0.8);  // Swipe up
        await SwipePage.assertTopPageTitleVisible();
    });
    it('Drag and Drop refresh test', async () => {
        await DragPage.openDragTab();
        await DragPage.dragFirstPiece();
        await expect(DragPage.dragPieceL1).not.toBeDisplayed();
        await DragPage.clickRefreshBtn();
        await DragPage.assertDragPiecesVisible();
    });
});