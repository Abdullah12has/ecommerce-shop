describe("renders the login page ", () => {
  it("goes to the login page", () => {
    cy.visit("/signin");
  });

  it("sigin with email and password", () => {
  
    cy.visit("/signin");
    cy.get(
      ".loginMain > :nth-child(1) > :nth-child(3) > .MuiInputBase-root > #standard-basic"
    )
      .click()
      .type("abdullah12.hassan7@hotmail.com");

    cy.get(":nth-child(4) > .MuiInputBase-root > #standard-password-input")
      .click()
      .type("aaaaaa");

    return cy.get(".lbuttonGroup > .btn ").click();
  });
});
