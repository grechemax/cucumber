Feature: SauceDemo Login

  Background:
    Given User is authenticated

  Scenario: Add two items to the cart
    When User adds two items to the cart
    Then Basket icon shows 2 items
    And User opens the cart
    Then Cart contains 2 items

    
   Scenario: When user clicks on the product, it opens the product details page
    When User clicks on the product "<product>"
    Then Product details page is opened for id "<id>"
    And Product name is "<product>"

    Examples:
      | product                 | id |
      | Sauce Labs Bike Light   | 0  |
      | Sauce Labs Bolt T-Shirt | 1  |
      | Sauce Labs Onesie       | 2  |
      | Sauce Labs Backpack     | 4  |
      | Sauce Labs Fleece Jacket| 5  |
   