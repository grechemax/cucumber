import { Page } from "playwright";

export class CartPage {
  constructor(readonly page: Page) {}

  public async open(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/cart.html");
    await this.page.waitForURL(/cart.html/);
  }

  public async countItemsInCart(): Promise<number> {
    return this.page.locator(".inventory_item_name").count();
  }
}
