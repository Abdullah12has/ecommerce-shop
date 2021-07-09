describe("renders the login page ", () => {
  it("goes to the login page", () => {
    cy.visit("/login");
  });

  it("signup with google", ()=>{
    cy.get('.btn2').click()
  })
});
