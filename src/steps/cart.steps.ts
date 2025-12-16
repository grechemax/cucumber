import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../worlds/custom.world.ts";
import { expect } from "chai";

When("User opens the cart", async function (this: CustomWorld) {
  await this.cartPage.open();
});

Then("Cart contains 2 items", async function (this: CustomWorld) {
  expect(await this.cartPage.countItemsInCart()).to.equal(2);
});
