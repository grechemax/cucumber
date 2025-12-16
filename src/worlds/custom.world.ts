import { IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "playwright";
import { ItemDetailsPage } from "../pages/item-details.page.ts";
import { InventoryPage } from "../pages/inventory.page.ts";
import { LoginPage } from "../pages/login.page.ts";
import { CartPage } from "../pages/cart.page.ts";

export class CustomWorld extends World {
  public static globalContext: Map<string, unknown> = new Map<
    string,
    unknown
  >();

  // we can create a context class that will have its set and get methods for better readability
  public scenarioContext: Map<string, unknown>;

  public static browser: Browser;
  public context: BrowserContext;
  public page: Page;

  // page instances
  private _loginPage?: LoginPage;
  private _inventoryPage?: InventoryPage;
  private _itemDetailsPage?: ItemDetailsPage;
  private _cartPage?: CartPage;

  public constructor(options: IWorldOptions) {
    super(options);
    this.scenarioContext = new Map<string, unknown>();
  }

  public get browser(): Browser {
    return CustomWorld.browser;
  }

  public get globalContext(): Map<string, unknown> {
    return CustomWorld.globalContext;
  }

  public get loginPage(): LoginPage {
    if (!this.page) throw new Error("World.page is not initialized yet");
    if (!this._loginPage) this._loginPage = new LoginPage(this.page);
    return this._loginPage;
  }

  public get inventoryPage(): InventoryPage {
    if (!this.page) throw new Error("World.page is not initialized yet");
    if (!this._inventoryPage)
      this._inventoryPage = new InventoryPage(this.page);
    return this._inventoryPage;
  }

  public get itemDetailsPage(): ItemDetailsPage {
    if (!this.page) throw new Error("World.page is not initialized yet");
    if (!this._itemDetailsPage)
      this._itemDetailsPage = new ItemDetailsPage(this.page);
    return this._itemDetailsPage;
  }

  public get cartPage(): CartPage {
    if (!this.page) throw new Error("World.page is not initialized yet");
    if (!this._cartPage) this._cartPage = new CartPage(this.page);
    return this._cartPage;
  }
}
