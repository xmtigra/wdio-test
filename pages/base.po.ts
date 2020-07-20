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

    public async waitForElementText(): Promise<void> {
        // coming soon
    }

    public async waitForElementVisible(element: Promise<WebdriverIO.Element>): Promise<boolean> {
        return (await element).waitForDisplayed();
    }

    public async waitForElementInvisible(): Promise<void> {
        // coming soon
    }

    public async waitForElementClickable(element: Promise<WebdriverIO.Element>): Promise<boolean> {
        return (await element).waitForClickable();
    }

    public async waitForListCountChanged(): Promise<void> {
        // coming soon
    }

    constructor() {
        console.log('Base Page');
    }

    public async isElementPresent(element: Promise<WebdriverIO.Element>): Promise<boolean> {
        return (await element).waitForExist();
    }

    public async isElementDisplayed(element: Promise<WebdriverIO.Element>): Promise<boolean> {
        await this.isElementPresent(element);
        return (await element).waitForDisplayed();
    }

    public async isElementEnabled(element: Promise<WebdriverIO.Element>): Promise<boolean> {
        await this.isElementPresent(element);
        return (await element).isEnabled();
    }

    public async isElementSelected(element: Promise<WebdriverIO.Element>): Promise<boolean> {
        await this.isElementPresent(element);
        return (await element).isSelected();
    }

    public async getElementText(element: Promise<WebdriverIO.Element>): Promise<string> {
        await this.isElementPresent(element);
        return (await element).getText();
    }

    public async clearElementField(element: Promise<WebdriverIO.Element>): Promise<void> {
        await this.isElementPresent(element);
        return (await element).clearValue();
    }

    public async typeElementText(element: Promise<WebdriverIO.Element>, text: string | number): Promise<void> {
        await this.isElementPresent(element);
        await this.clearElementField(element);
        return (await element).setValue(text);
    }

    public async getElementCssValue(element: Promise<WebdriverIO.Element>, value: string): Promise<string> {
        await this.isElementPresent(element);
        const css: Promise<WebdriverIO.CSSProperty> = (await element).getCSSProperty(value);
        return (await css).value;
    }

    public async getElementValue(element: Promise<WebdriverIO.Element>): Promise<string> {
        await this.isElementPresent(element);
        return (await element).getValue();
    }

    public async getElementAttribute(element: Promise<WebdriverIO.Element>, name: string): Promise<string> {
        await this.isElementPresent(element);
        return (await element).getAttribute(name);
    }

    public async clickOnElement(element: Promise<WebdriverIO.Element>): Promise<void> {
        await this.waitForElementClickable(element);
        await (await element).click();
    }

}
