# Dev Stack

## About

Dev Stack is a modern web application where developers can explore different technologies and build their own personalized development stack. Users can view technology details, add technologies to their stack, and easily manage their selected technologies.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React icon
- React Toastify
- Vite
- JSON

## Features

1. Explore different development technologies with their category, rating, and difficulty level.
2. Add and remove technologies to build a personalized technology stack.
3. Get toast notifications for adding, duplicate adding, removing, and removing all technologies.

## React Questions

### 1. What is JSX, and why is it used in React?

**Answer:** JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. It is used in React because it makes the UI code easier to write and understand.

### 2. What is the difference between props and state?

**Answer:** Props are used to pass data from a parent component to a child component, and they are read-only. State is used to store and manage data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

**Answer:** The useState hook is used to create and manage state in a React component. In this project, I used useState to manage the selected technology stack and other changing data.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:** The useEffect hook is used to perform side effects in React, such as fetching data or working with external systems. In this project, I did not use useEffect to load the JSON data. I used use() with Suspense to load the local JSON data.

### 5. Why does every item in a .map() list need a unique key prop?

**Answer:** Every item in a .map() list needs a unique key so React can identify each item correctly. It helps React efficiently update, add, or remove items when the list changes.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering means showing different UI based on a condition. In this project, I used conditional rendering to show the "Your stack is empty." message when there are no selected technologies.

Example:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // selected technologies
)}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** A parent component passes data to a child component using props. The child can send something back to the parent by calling a function that the parent passes through props.

For example, the parent passes the technology data and an onAdd function to the TechnologyCard component. The child calls the onAdd function when the user clicks the Add button.



 

