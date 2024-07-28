# CustomForm Component

A reusable custom submit form in React that allows adding dynamic input fields and buttons by sending them as props.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repository.git

2. Navigate to the project directory:

   ```sh
   cd your-repository
3. Install the dependencies:

   ```sh
   npm install

## Pre-requisites
* Code Editor (like VS Code)
* React basic knowledge.
* Basic knowledge of HTML

## Props
### 1. fields: An array of objects representing the input fields. Each object should have the following properties:

  * id: A unique identifier for the input field.
  * label: The label for the input field.
  * type: The type of the input field (e.g., "text", "password").
  * placeholder: The placeholder text for the input field (optional).
  * ref: A reference to the input field.
  * required: A boolean indicating whether the input field is required (optional).
    
### 2. buttons: An array of objects representing the buttons. Each object should have the following properties:

  * type: The type of the button (e.g., "submit", "button").
  * onClick: The function to call when the button is clicked.
  * text: The text to display on the button.

### Summary

- The `CustomForm` component allows for dynamic input fields and buttons to be passed in as props.
