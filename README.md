# DOM Testing Lab: User Behavior Simulation

## Overview

In this lab, you will practice testing DOM behavior using Jest and jsdom.

The application functionality has already been implemented. Your role is to write a test suite that verifies the behavior of the existing code.

You will test:
- DOM updates
- Simulated user interactions
- Form submission behavior
- Error handling

---

## Scenario

You are a junior developer responsible for validating the functionality of a web application.

The development team has already built the DOM manipulation logic. Your task is to ensure the application behaves correctly by writing automated tests that verify:

- Content updates in the DOM  
- Element removal  
- Button click behavior  
- Form submission outcomes  
- Error handling for invalid input  

---

## Tools and Setup

### Requirements
- Node.js  
- VS Code (or similar editor)

### Repository Setup

    # Fork and clone the repository
    git clone <your-fork-url>

    # Navigate into the project
    cd <repo-name>

    # Install dependencies
    npm install

---

## Project Structure

    ├── index.html          # Application UI
    ├── index.js            # Pre-built DOM logic
    ├── styles.css          # Basic styles for the application
    ├── package.json        # Project configuration and dependencies
    ├── eslint.config.mjs   # ESLint configuration
    ├── .gitignore          # Git ignore rules for Node projects
    ├── README.md           # Lab instructions
    └── test/
        └── index.test.js   # You will create and edit this file

---

## Instructions

### Task 1: Define the Problem

- Identify what each function in `index.js` is expected to do  
- Determine how the DOM should change after each function runs  
- Identify user interactions (clicks, form submissions)  
- Define expected outcomes, including error cases  

---

### Task 2: Determine the Design and Develop the Code

In a typical workflow, this phase involves building the application.  
For this lab, the code has already been developed.

Your task is to review the implementation and prepare to test it.

- Analyze functions in `index.js`
- Identify how each function modifies the DOM
- Map inputs to expected outputs
- Plan what each test should verify

---

### Task 3: Test and Refine

Create a test suite using Jest that verifies the following:

#### Required Tests

- `addElementToDOM` updates DOM content  
- `removeElementFromDOM` removes an element  
- `simulateClick` updates the DOM correctly  
- `handleFormSubmit`:
  - updates the DOM with valid input  
  - shows an error for empty input  

#### Additional Requirements

- Use `@jest-environment jsdom`  
- Use `beforeEach` to reset the DOM  
- Write clear and specific assertions  
- Ensure tests are independent  

---

### Task 4: Document and Maintain

- Use clear, descriptive test names  
- Keep tests organized and readable  
- Track changes using Git  
- Ensure your test suite is easy to understand and maintain  

---

## Expected Behavior Summary

| Function | Behavior |
|----------|----------|
| addElementToDOM | Adds content to a target container |
| removeElementFromDOM | Removes an element from the DOM |
| simulateClick | Updates DOM when triggered |
| handleFormSubmit | Updates DOM or shows error based on input |

---

## Important Notes

- Do not modify `index.js`  
- Focus only on writing tests  
- Ensure all tests pass before submitting  

---

## Submission

    git add .
    git commit -m "Complete DOM testing lab"
    git push origin main

Submit your repository through CodeGrade in Canvas.

---

## How It Works

DOM testing verifies that JavaScript correctly updates the structure and content of a webpage.

### Process

1. Jest runs tests in a simulated browser environment  
2. jsdom creates a virtual DOM  
3. Tests set up HTML before execution  
4. Functions are executed  
5. Assertions verify DOM changes  

### Key Constraints

- Tests must not depend on each other  
- DOM must reset before each test  
- Both success and error scenarios must be tested  

---

## Learning Outcome

By completing this lab, you will be able to:

- Write Jest tests for DOM behavior  
- Simulate user interactions programmatically  
- Validate UI changes through assertions  
- Test both normal and edge case scenarios  

