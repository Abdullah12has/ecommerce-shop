describe("AUTOMATION TEST CART & CHECKOUT", () => {
  it("goes to hats", () => {
    cy.visit("/shop/hats");
  });

  it("adds 3 products to the cart ", () => {
    cy.get(":nth-child(1) > .MuiButtonBase-root > .MuiButton-label").click();
    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    cy.get(":nth-child(3) > .MuiButtonBase-root > .MuiButton-label").click();
  });

  it("counts the items added to the cart should be 3 == addedItems", () => {
    cy.get(".countItem").contains("3");
  });

  it("opens cart and goes to checkout page", () => {
    cy.get(".cartIcon").click();
    cy.get("a.btn3 > .MuiButtonBase-root > .MuiButton-label").click();
  });

  it("checks if items' name & image exist and a total price exists", () => {
    cy.get(".COname").should("exist");
    cy.get(".itemImage").should("exist");

    cy.get(".totalCheckout").should("exist");
  });
});
