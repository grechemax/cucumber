import { Locator, Page, Response } from "playwright";

export class InventoryPage {
  private readonly backPackTitle = this.page.locator(
    "#item_4_title_link > div",
  );
  private readonly backpackItem = this.page.locator(
    "#add-to-cart-sauce-labs-backpack",
  );
  private readonly tShirtItem = this.page.locator(
    "#add-to-cart-sauce-labs-bolt-t-shirt",
  );
  private readonly badge = this.page.locator(".shopping_cart_badge");

  constructor(readonly page: Page) {}

  private getBackpack(): Locator {
    return this.backpackItem;
  }

  private getBoltTShirt(): Locator {
    return this.tShirtItem;
  }

  public async addBackpack(): Promise<void> {
    await this.getBackpack().click();
  }

  public async addTShirt(): Promise<void> {
    await this.getBoltTShirt().click();
  }

  public async itemsInCart(): Promise<string> {
    await this.badge.waitFor({ state: "visible" });
    const badgeText = await this.badge.textContent();
    return badgeText ?? "";
  }

  public async clickOnItemByName(itemName: string): Promise<void> {
    await this.page
      .locator(`div.inventory_item_name:has-text("${itemName}")`)
      .click();
  }
}
