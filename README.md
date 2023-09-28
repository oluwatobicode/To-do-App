# React + Vite

# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github ](https://github.com/Oluwatobiiiiii/To-do-App)
- Live Site URL: [Site](https://to-do-app-ochre-nine.vercel.app/)

### Built with

-React + Vite

- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

-I got a better understanding of how to use filter for buttons in react

```js
const [filter, setFilter] = useState("all"); // Initialize filter state with "all"

// Show ALL items
function showAll() {
  setFilter("all");
}

// Show ACTIVE items (NOT YET COMPLETED)
function showActive() {
  setFilter("active");
}

// Show COMPLETED items
function showCompleted() {
  setFilter("completed");
}

// Modify the List component to filter items based on the filter state
const filteredItems = items.filter((item) => {
  if (filter === "active") {
    return !item.packed;
  } else if (filter === "completed") {
    return item.packed;
  }
  return true; // "all" filter or default
});
```

## Author

- Website - [Odetokun Treasure](https://linktr.ee/codingninja)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/@Oluwatobiiiiii)
- Twitter - [@oluwatobicodes](https://www.twitter.com/oluwatobicodes)
