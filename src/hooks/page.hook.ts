import { After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "../worlds/custom.world.ts";

export function pageHook(): void {
  Before(async function (this: CustomWorld) {
    this.page = await this.context.newPage();
  });

  After(async function (this: CustomWorld) {
    await this.page.close();
  });
}
