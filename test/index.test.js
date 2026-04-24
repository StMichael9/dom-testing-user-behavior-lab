/**
 * @jest-environment jsdom
 */

describe("DOM interactions (minimal)", () => {
  let mod;
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="dynamic-content"></div>
      <button id="simulate-click">Sim</button>
      <form id="user-form"><input id="user-input"/><button type="submit">Go</button></form>
      <div id="error-message" class="hidden"></div>
    `;
    mod = require("../index.js");
  });

  afterEach(() => {
    jest.resetModules();
    document.body.innerHTML = "";
  });

  test("addElementToDOM sets innerHTML", () => {
    mod.addElementToDOM("dynamic-content", "hi");
    expect(document.getElementById("dynamic-content").innerHTML).toBe("hi");
  });

  test("simulateClick updates content and button click triggers listener", () => {
    mod.simulateClick("dynamic-content", "clicked");
    expect(document.getElementById("dynamic-content").innerHTML).toBe(
      "clicked",
    );
    document
      .getElementById("simulate-click")
      .dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(document.getElementById("dynamic-content").innerHTML).toBe(
      "Button Clicked!",
    );
  });

  test("removeElementFromDOM removes element", () => {
    const el = document.createElement("div");
    el.id = "x";
    document.body.appendChild(el);
    mod.removeElementFromDOM("x");
    expect(document.getElementById("x")).toBeNull();
  });

  test("handleFormSubmit success and empty input error", () => {
    const input = document.getElementById("user-input");
    const error = document.getElementById("error-message");

    input.value = "ok";
    mod.handleFormSubmit("user-form", "dynamic-content");
    expect(document.getElementById("dynamic-content").innerHTML).toBe("ok");

    input.value = "   ";
    error.classList.add("hidden");
    error.textContent = "";
    mod.handleFormSubmit("user-form", "dynamic-content");
    expect(error.classList.contains("hidden")).toBe(false);
    expect(error.textContent).toBe("Input cannot be empty");
  });
});
