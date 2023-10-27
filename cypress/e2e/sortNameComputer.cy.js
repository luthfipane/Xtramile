describe("sort name computer", () => {
  it("passes", () => {
    cy.visit("https://computer-database.gatling.io/computers");
    cy.contains("Computer name").click();
    cy.contains("lenovo thinkpad t60p").should("be.visible");
  });
});
