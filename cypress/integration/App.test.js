describe("renders the Home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#container").should("exist");
  });

  it("has all the buttons and clicks working  + header components", () => {
    cy.get("#Triangle").click();
    cy.get('[href="/shop"]').click();
    cy.get('[href="/signin"]').click();
    cy.get(".hlogo > svg").click();
    cy.get(".countItem").click();
    cy.get(".countItem").click();
    cy.get(":nth-child(1) > .inner").click();
  });

});
