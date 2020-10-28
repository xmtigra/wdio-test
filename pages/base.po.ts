export class BasePo {

    public async navigateTo(url: string): Promise<void> {
        return browser.navigateTo(url);
    }

    public async getCurrentUrl(): Promise<string> {
        return browser.getUrl();
    }

    public async getTitle(): Promise<string> {
        return browser.getTitle();
    }

    public async wait(ms: number): Promise<void> {
        await browser.pause(ms);
    }

    public async waitForElementText(element: WebdriverIO.Element, text: string): Promise<void> {
        let currRetry = 0, error;
        do {
            try {
                await browser.waitUntil(() => {
                    const txt = element.getText();
                    return txt === text;
                }, {timeout: 4000});
                return;
            } catch (err) {
                currRetry++;
                error = err;
            }
        } while (currRetry < 5);
        throw new Error(`Element ${element.selector} is not containing specified text: ${text}
        after maximum retries (${5}), Error message: ${error.toString()}`);
    }

    public async waitForElementVisible(element: WebdriverIO.Element): Promise<boolean> {
        return (await element).waitForDisplayed();
    }

    public async waitForElementInvisible(element: WebdriverIO.Element): Promise<void> {
        let currRetry = 0, error;
        do {
            try {
                await browser.waitUntil(() => !element.isDisplayed(), {timeout: 4000});
                return;
            } catch (err) {
                currRetry++;
                error = err;
            }
        } while (currRetry < 5);
        throw new Error(`Element ${element.selector} is still visible
        after maximum retries (${5}), Error message: ${error.toString()}`);
    }

    public async waitForElementClickable(element: WebdriverIO.Element): Promise<boolean> {
        return (await element).waitForClickable();
    }

    public async waitForListCountChanged(list: WebdriverIO.ElementArray, expectedCount: number): Promise<void> {
        let currRetry = 0, elements, error;
        do {
            try {
                elements = await $$(list.selector);
                await browser.waitUntil(() => {
                    return elements.length === expectedCount;
                }, {timeout: 4000});
                return;
            } catch (err) {
                currRetry++;
                error = err;
            }
        } while (currRetry < 5);
        throw new Error(`List ${list.selector} count does not changed
        after maximum retries (${5}), Error message: ${error.name.toString()}`);
    }

    public async switchToIframe(element: WebdriverIO.Element): Promise<void> {
        await this.isElementDisplayed(element);
        await browser.switchToFrame((await element));
        await this.wait(100);
    }

    public async switchToNextTab(): Promise<void> {
        const handlesList = await browser.getWindowHandles();
        const currHandle = await browser.getWindowHandle();
        const index = handlesList.findIndex(tab => tab === currHandle);
        const newTabHandle = handlesList[index + 1];
        return browser.switchToWindow(newTabHandle);
    }

    public async switchToTabByIndex(tabIndex): Promise<void> {
        const handlesList = await browser.getWindowHandles();
        const tgtTabHandle = handlesList[tabIndex];
        await browser.switchToWindow(tgtTabHandle);
    }

    public async closeUnusedTabs(): Promise<void> {
        const currHandle = await browser.getWindowHandle();
        const handlesList = await browser.getWindowHandles();
        for (let i = 0; i < handlesList.length; i++) {
            if (handlesList[i] !== currHandle) {
                await browser.switchToWindow(handlesList[i]);
                await browser.closeWindow();
            }
        }
        await browser.switchToFrame(null)
        await browser.switchToWindow(currHandle);
    }

    public async forceLogOut(): Promise<void> {
        await browser.clearLocalStorage();
        await browser.clearSessionStorage();
        await browser.deleteAllCookies();
        await this.closeUnusedTabs();
    }

    constructor() {
        console.log('Base Page');
    }

    public async isElementPresent(element: WebdriverIO.Element): Promise<boolean> {
        return (await element).waitForExist();
    }

    public async isElementDisplayed(element: WebdriverIO.Element): Promise<boolean> {
        await this.isElementPresent(element);
        return (await element).waitForDisplayed();
    }

    public async isElementEnabled(element: WebdriverIO.Element): Promise<boolean> {
        await this.isElementPresent(element);
        return (await element).isEnabled();
    }

    public async isElementSelected(element: WebdriverIO.Element): Promise<boolean> {
        await this.isElementPresent(element);
        return (await element).isSelected();
    }

    public async getElementText(element: WebdriverIO.Element): Promise<string> {
        await this.isElementPresent(element);
        return (await element).getText();
    }

    public async clearElementField(element: WebdriverIO.Element): Promise<void> {
        await this.isElementPresent(element);
        return (await element).clearValue();
    }

    public async typeElementText(element: WebdriverIO.Element, text: string | number): Promise<void> {
        await this.isElementPresent(element);
        await this.clearElementField(element);
        return (await element).setValue(text);
    }

    public async getElementCssValue(element: WebdriverIO.Element, value: string): Promise<string> {
        await this.isElementPresent(element);
        const css: any = (await element).getCSSProperty(value);
        return (await css).value;
    }

    public async getElementValue(element: WebdriverIO.Element): Promise<string> {
        await this.isElementPresent(element);
        return (await element).getValue();
    }

    public async getElementAttribute(element: WebdriverIO.Element, name: string): Promise<string> {
        await this.isElementPresent(element);
        return (await element).getAttribute(name);
    }

    public async clickOnElement(element: WebdriverIO.Element): Promise<void> {
        await this.waitForElementClickable(element);
        await (await element).click();
    }

}
