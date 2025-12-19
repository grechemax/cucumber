import { Locator, Page } from 'playwright';

export class ItemDetailsPage {
    private readonly name: Locator;

    public constructor(public readonly page: Page) {
        this.name = page.locator('[data-test="inventory-item-name"]');
    }

    public async getItemName(): Promise<{ name: string }> {
        return {
            name: (await this.name.textContent()) ?? ''
        };
    }

    public getPageURL(): string {
        return this.page.url();
    }
}
