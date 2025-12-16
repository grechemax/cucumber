import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { CustomWorld } from "../worlds/custom.world.ts";

export function browserHook(): void {
  BeforeAll(async function () {
    CustomWorld.browser = await chromium.launch({ headless: true });
  });

  AfterAll(async function () {
    await CustomWorld.browser.close();
  });
}
