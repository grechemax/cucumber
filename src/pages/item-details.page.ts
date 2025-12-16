import { Locator, Page } from "playwright";

export class ItemDetailsPage {
  private readonly name: Locator;

  constructor(readonly page: Page) {
    this.name = page.locator('[data-test="inventory-item-name"]');
  }

  async getItemName(): Promise<{ name: string }> {
    return {
      name: (await this.name.textContent()) ?? "",
    };
  }

  async getPageURL(): Promise<string> {
    return this.page.url();
  }
}
