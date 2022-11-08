// https://docs.cypress.io/api/introduction/api.html

describe("Homepage test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "The Characters");
  });
});

