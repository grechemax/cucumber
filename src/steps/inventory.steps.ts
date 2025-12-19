import { Then, When } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/custom.world.ts';
import { expect } from 'chai';

// Scenario: User adds two items to the cart from the inventory page
When('User adds two items to the cart', async function (this: CustomWorld) {
    await this.inventoryPage.addBackpack();
    await this.inventoryPage.addTShirt();
});

Then('Basket icon shows 2 items', async function (this: CustomWorld) {
    expect(await this.inventoryPage.itemsInCart()).to.equal('2');
});

// Scenario: When user clicks on the product, it opens the product details page
When('User clicks on the product {string}', async function (this: CustomWorld, productName: string) {
    await this.inventoryPage.clickOnItemByName(productName);
});
