import { After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "../worlds/custom.world.ts";
import * as fs from "fs";
import { BrowserContextOptions } from "playwright";

export function browserContextHook(): void {
  Before(async function (this: CustomWorld, { pickle }) {
    const featureName = pickle.uri
      .replace(".feature", "")
      .replace(":", "-")
      .replace("\\", "/");
    const scenarioName = pickle.name
      .split(":")
      .join("")
      .replace("/", "-")
      .replace("\\", "-");
    const path = "videos/" + featureName + "/" + scenarioName;

    const browserOptions: BrowserContextOptions = {
      recordVideo: { dir: path },
      timezoneId: "Europe/Berlin",
      viewport: { width: 1280, height: 1024 },
    };

    const workerId = process.env.CUCUMBER_WORKER_ID
      ? parseInt(process.env.CUCUMBER_WORKER_ID)
      : 0;
    if (fs.existsSync(`.auth/storage-state-${workerId}.json`)) {
      browserOptions.storageState = `.auth/storage-state-${workerId}.json`;
    }
    this.context = await CustomWorld.browser.newContext(browserOptions);
  });

  After(async function (this: CustomWorld) {
    await this.context.close();
  });
}
