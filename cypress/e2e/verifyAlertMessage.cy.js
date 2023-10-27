describe("verify alert message", () => {
  it("passes", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Alert").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am a JS Alert");
    });
    cy.contains("You successfully clicked an alert").should("be.visible");
  });
});
