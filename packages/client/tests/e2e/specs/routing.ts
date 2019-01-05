// https://docs.cypress.io/api/introduction/api.html

describe("Routing", () => {
  it("Root url", () => {
    cy.visit("/");
    cy.contains("h1", "Temporada");
  });
  it("Season url", () => {
    cy.visit("/season/24");
    cy.contains("h1", "Temporada");
  });
  it("Random url", () => {
    cy.visit("/random");
  });
  it("Chapter url", () => {
    cy.visit("/season/1/chapter/1/Audio_Latino");
    cy.contains(
      "div.card-title.htimeout5.text-primary",
      '1x1: "Especial de Navidad"',
      {
        timeout: 2000
      }
    );
  });
});
