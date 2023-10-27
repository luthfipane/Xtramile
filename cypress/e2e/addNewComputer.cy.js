const config = require("../../global-var.json");
const common = require("../function/getRandomNumber");
describe("adding new computer", () => {
  const computerName = config.computerName + common.getRndInteger(1, 100);
  it("passes", () => {
    cy.visit("https://computer-database.gatling.io/computers");
    cy.get("#add").click();
    cy.get("#name").type(computerName);
    cy.get("#introduced").type(config.introducedDate);
    cy.get("select").select("13");
    cy.contains("Create this computer").click();
    cy.contains(
      "Computer" + " " + computerName + " " + "has been created"
    ).should("be.visible");
  });
});
