describe("verify prompt message", () => {
  it("passes", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("This Prompt Text");
    });
    cy.contains("Click for JS Prompt").click();
    cy.contains("This Prompt Text").should("be.visible");
  });
});
