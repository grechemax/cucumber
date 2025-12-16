import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../worlds/custom.world.ts";

Given("User is authenticated", async function (this: CustomWorld) {
  const username = process.env.STANDARD_USER!;
  const password = process.env.PASSWORD!;
  await this.loginPage.open();
  await this.loginPage.login(username, password);
});
