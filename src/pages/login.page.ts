import { Locator, Page } from "playwright";

export class LoginPage {
  constructor(readonly page: Page) {}

  public async open(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/");
  }

  private getInputUsername(): Locator {
    return this.page.locator("#user-name");
  }

  private getInputPassword(): Locator {
    return this.page.locator("#password");
  }

  private getButtonLogin(): Locator {
    return this.page.locator("#login-button");
  }

  public async login(
    username: string,
    password: string,
    storagePath?: string,
  ): Promise<void> {
    await this.getInputUsername().fill(username);
    await this.getInputPassword().fill(password);
    await this.getButtonLogin().click();
    const workerId = process.env.CUCUMBER_WORKER_ID ?? "0";

    const defaultStorage = `.auth/storage-state-${workerId}.json`;
    const writePath = storagePath ?? defaultStorage;

    await this.page.context().storageState({ path: writePath });
  }
}
