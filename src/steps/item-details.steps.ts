import { Then } from "@cucumber/cucumber";
import { CustomWorld } from "../worlds/custom.world.ts";
import { expect } from "chai";

Then(
  "Product details page is opened for id {string}",
  async function (this: CustomWorld, id: string) {
    expect(await this.itemDetailsPage.getPageURL()).to.include(
      `inventory-item.html?id=${id}`,
    );
  },
);

Then(
  "Product name is {string}",
  async function (this: CustomWorld, productName: string) {
    const actualProductName = await this.itemDetailsPage
      .getItemName()
      .then((res) => res.name);
    expect(actualProductName).to.equal(productName);
  },
);
