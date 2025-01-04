import { $ } from '@wdio/globals';
import Page from './BasePage';

class DragPage extends Page {
    get refreshBtn() {
        return $('~renew');
    }
    get dragPieceL1() {
        return $('//android.view.ViewGroup[@content-desc="drag-l1"]');
    }
    get dragPieceL2() {
        return $('//android.view.ViewGroup[@content-desc="drag-l2"]');
    }
    get dragPieceL3() {
        return $('//android.view.ViewGroup[@content-desc="drag-l3"]');
    }
    get dragPieceC1() {
        return $('//android.view.ViewGroup[@content-desc="drag-c1"]');
    }
    get dragPieceC2() {
        return $('//android.view.ViewGroup[@content-desc="drag-c2"]');
    }
    get dragPieceC3() {
        return $('//android.view.ViewGroup[@content-desc="drag-c3"]');
    }
    get dragPieceR1() {
        return $('//android.view.ViewGroup[@content-desc="drag-r1"]');
    }
    get dragPieceR2() {
        return $('//android.view.ViewGroup[@content-desc="drag-r2"]');
    }
    get dragPieceR3() {
        return $('//android.view.ViewGroup[@content-desc="drag-r3"]');
    }
    get dropPieceL1() {
        return $('//android.view.ViewGroup[@content-desc="drop-l1"]');
    }

    async assertDragPiecesVisible() {
        const pieces = [
            this.dragPieceL1,
            this.dragPieceL2,
            this.dragPieceL3,
            this.dragPieceC1,
            this.dragPieceC2,
            this.dragPieceC3,
            this.dragPieceR1,
            this.dragPieceR2,
            this.dragPieceR3
        ];

        for (let piece of pieces) {
            await expect(piece).toBeDisplayed();
        }
    }

    async dragPieceToDrop(pieceLocator: ChainablePromiseElement, dropLocator: ChainablePromiseElement) {
        const piece = await pieceLocator;  
        const dropTarget = await dropLocator;  

        await driver.performActions([{
            type: 'pointer',
            id: 'action1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, origin: piece },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 200, origin: dropTarget },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }

    async clickRefreshBtn() {
        await this.refreshBtn.click();
        await browser.pause(500);
    }

    async dragFirstPiece() {
        await this.dragPieceToDrop(await this.dragPieceL1, await this.dropPieceL1);
    }
}

export default new DragPage();
