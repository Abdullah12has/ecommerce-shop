describe("renders the Shop page", () => {
  it("renders correctly", () => {
    cy.visit("/shop");
  });

  it("has all the categories listed", () => {
    cy.contains("Hats").should("exist");
    cy.contains("Sneakers").should("exist");
    cy.contains("Jackets").should("exist");
    cy.contains("Womens").should("exist");
    cy.contains("Mens").should("exist");
  });
  it("has the products clickable", () => {
    cy.get(
      ":nth-child(1) > .items > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label"
    ).click();
    cy.get(
      ":nth-child(1) > .items > :nth-child(3) > .MuiButtonBase-root"
    ).click();
    cy.get(
      ":nth-child(1) > .items > :nth-child(4) > .MuiButtonBase-root"
    ).click();
    cy.get(
      ":nth-child(2) > .items > :nth-child(4) > .MuiButtonBase-root > .MuiButton-label"
    ).click();
    cy.get(
      ":nth-child(3) > .items > :nth-child(1) > .MuiButtonBase-root"
    ).click();
  });
});
