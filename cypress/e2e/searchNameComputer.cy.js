const config = require("../../global-var.json");
describe("search name computer", () => {
  it("passes", () => {
    cy.visit("https://computer-database.gatling.io/computers");
    cy.get("#searchbox").type(config.computerSearch);
    cy.get("#searchsubmit").click();
    cy.contains(config.productSearch).should("be.visible");
  });
});
