describe("verify confirmation message", () => {
  it("passes", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Confirm").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am a JS Confirm");
    });
    cy.contains("You clicked: Ok").should("be.visible");
  });
});
