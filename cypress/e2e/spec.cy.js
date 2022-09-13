/// <reference types="cypress" />

// const { it } = require("mocha");

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
    cy.get(".new-todo", { timeout: 6000 }).type("clean room {enter}");
  });

  it("should have text clean room", () => {
    cy.get("label").should("have.text", "clean room");
    cy.get(".toggle").should("not.be.checked");
  });
  it("should check the toggle", () => {
    cy.get(".toggle").click();
    cy.get(".toggle").should("be.checked");
  });
  it("should clear the list", () => {
    cy.get(".toggle").click();
    cy.get("label").should("have.css", "text-decoration-line", "line-through"); //text-decoration-line(property), line-decoration(value)
    cy.contains("Clear").click();
    cy.get(".todo-list").should("not.have.descendants", "li");
  });
});
