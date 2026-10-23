# Click Counter

A lightweight front-end project that counts how many times a button is clicked. It uses plain HTML, CSS, and JavaScript and is designed to be easy to understand, easy to run, and beginner-friendly.

## 👤 Project Maintainer
[](https://github.com/beyondruntime/click-counter#-project-maintainer)
**Click Counter** is independently created and maintained by [@beyondruntime](https://github.com/beyondruntime). I am currently the sole maintainer responsible for the project, documentation, issue reviews, and release decisions. Community contributions are welcome, but they are reviewed and merged by me.

## Overview

This project demonstrates a minimal interactive UI:

- A heading and short message explain the app
- A visible counter displays the current click count
- A button increments the count each time it is clicked

This project is intentionally small and easy to understand, making it a good example for beginners learning JavaScript DOM manipulation and basic web development.

## Features

- Incremental click counter
- Clean single-page interface
- Minimal and readable styling
- No dependencies or build tools required
- Beginner-friendly code structure

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)

## 📁 Project Structure

```text
click-counter/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── index.html
```

## Getting Started

### Prerequisites

- A modern web browser

### Run the app

Open `index.html` directly in a browser to launch the application.

The main entry point of the project is `index.html`, and it loads the required CSS and JavaScript files automatically.

## HTML Code Explained

```html
<!DOCTYPE html>
<html lang="en">
   <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width" initial-scale="1.0" />
       <link rel="stylesheet" href="css/style.css">
       <script src="js/script.js" defer></script>
       <title>Click Counter</title>
   </head>

   <body>
    <h1>Welcome to the Click Counter</h1>
     <p>Click the button to increment the counter</p>
     <h2 id= "counter">Click count: 0</h2>
    <button id="countbutton">Click me</button>
   </body>
</html>
```

### HTML Code Explained Line by Line

1. `<!DOCTYPE html>` declares the document type as HTML5.
2. `<html lang="en">` tells the browser that the page is in English.
3. `<head>` contains metadata and linked files that do not appear directly on the page.
4. `<meta charset="UTF-8" />` ensures the page uses UTF-8 encoding for proper text display.
5. `<meta name="viewport" content="width=device-width" initial-scale="1.0" />` makes the page responsive on mobile devices.
6. `<link rel="stylesheet" href="css/style.css">` connects the HTML file to the stylesheet.
7. `<script src="js/script.js" defer></script>` loads the JavaScript file and delays execution until the page is ready.
8. `<title>Click Counter</title>` sets the browser tab title.
9. `<body>` wraps all visible page elements.
10. `<h1>Welcome to the Click Counter</h1>` displays the main page heading.
11. `<p>Click the button to increment the counter</p>` gives the user instructions.
12. `<h2 id="counter">Click count: 0</h2>` creates the visible counter display and gives it an ID for JavaScript updates.
13. `<button id="countbutton">Click me</button>` creates the interactive button the user clicks.

### How Everything Works Together

The HTML defines the page structure: a heading, instructions, a counter display, and a button. The `id` attributes allow JavaScript to locate and update these elements. CSS then adds the styling, while JavaScript adds the click functionality.

## CSS Styling Explained

```css
body {
    background-color:  #0f172a;
    font-family:  "Times New Roman", Times, sans-serif;
    margin-top: 100px;
    text-align: center;
}

h1 {
    color: #f8fafc;
}

p {
     color:  #cbd5e1;
}

h2 {
    color: #2dd4bf;
}

button {
    background-color: #6366f1;
    color: white;
    border: none;
    cursor:pointer;
    border-radius: 8px;
    padding: 10px 20px;
}

button:hover {
    background-color:  #4f46e5;
}
```

### CSS Code Explained Line by Line

1. `body { ... }` styles the main page background, font, spacing, and centering.
2. `background-color: #0f172a;` sets a dark navy background.
3. `font-family: "Times New Roman", Times, sans-serif;` gives the page a classic font style.
4. `margin-top: 100px;` adds space above the page content.
5. `text-align: center;` centers the main content on the screen.
6. `h1 { color: #f8fafc; }` makes the heading white for contrast against the dark background.
7. `p { color: #cbd5e1; }` sets paragraph text to a soft gray-blue color.
8. `h2 { color: #2dd4bf; }` colors the counter with a teal green tone.
9. `button { ... }` styles the button with a purple theme and rounded corners.
10. `background-color: #6366f1;` gives the button a violet-blue fill.
11. `color: white;` makes the text readable.
12. `border: none;` removes the default border.
13. `cursor: pointer;` changes the cursor to a pointer when hovering.
14. `border-radius: 8px;` rounds the button corners.
15. `padding: 10px 20px;` adds inside spacing for a better-sized button.
16. `button:hover { background-color: #4f46e5; }` darkens the button when a user hovers over it.

### How Everything Works Together

The CSS creates a visually clean dark theme and ensures the text is readable and centered. It styles the button so it looks interactive and clearly clickable. The hover state helps provide visual feedback, making the page feel polished and responsive.

## JavaScript Code Explained

```javascript
let count = 0

const buttoncounter = document.getElementById("countbutton")
const get_counter = document.getElementById("counter")

buttoncounter.addEventListener("click", function(){
    count++
    get_counter.textContent = "Click count: " + count;
});
```

### JavaScript Code Explained Line by Line

1. `let count = 0` declares a variable called `count` and starts it at `0`.
2. `const buttoncounter = document.getElementById("countbutton")` finds the button using its ID and stores it in a variable.
3. `const get_counter = document.getElementById("counter")` finds the counter display element and stores it.
4. `buttoncounter.addEventListener("click", function(){ ... });` listens for a click on the button.
5. `count++` increases the count by one each time the button is clicked.
6. `get_counter.textContent = "Click count: " + count;` updates the displayed number in the webpage.

### How Everything Works Together

The JavaScript connects the button and counter to the DOM. When the button is clicked, the code increases the count and then updates the displayed text on the page. This makes the counter respond instantly to each user click.

## How the App Works as a Whole

The project combines three layers:

- HTML provides the structure and content
- CSS provides the styling and layout
- JavaScript adds the interaction and updates the counter in real time

Together, these elements create a small but complete web application that updates the UI whenever the user clicks the button.

## 🤝 Contributing
[](https://github.com/beyondruntime/click-counter#-contributing)
Contributions, bug reports, documentation improvements, and suggestions are welcome! Please read the [Contributing Guidelines](./CONTRIBUTING.md) and follow the [Code of Conduct](./CODE_OF_CONDUCT.md) before participating. The project is independently maintained by [@beyondruntime](https://github.com/beyondruntime), and all final review and merge decisions are made by the sole maintainer.

## 📄 License
[](https://github.com/beyondruntime/click-counter#-license)
This project is open source and licensed under the [MIT License](./LICENSE).

## 📬 Contact the Maintainer
[](https://github.com/beyondruntime/click-counter#-contact-the-maintainer)
Have a question, feedback, a collaboration idea, or an issue you'd like to discuss? Feel free to get in touch.

- **Sole maintainer:** [@beyondruntime](https://github.com/beyondruntime)
- **Website:** [mansurii.com](https://mansurii.com/)
- **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/ismail-mansuri-670648240)
- **Email:** [mansuriismail565@gmail.com](mailto:mansuriismail565@gmail.com)

### 📅 Meetings and Collaboration
[](https://github.com/beyondruntime/click-counter#-meetings-and-collaboration)
If you'd like to arrange a meeting or discuss a potential collaboration, please reach out by email or LinkedIn with a short summary of what you'd like to discuss and your preferred times. Meetings are arranged by agreement; there is no public booking link at present.

### ☕ Support the Project
[](https://github.com/beyondruntime/click-counter#-support-the-project)
If you find this project helpful and would like to support future improvements, you can [buy me a coffee](https://buymeacoffee.com/ismailmansuri-). Support is optional and not required to use or contribute to the project.

## Development Notes

This project is intentionally minimal and does not require package installation, build steps, or a framework. That makes it ideal for learning, teaching, or quick prototyping.

Possible extensions include:

- Reset button
- Decrement button
- Save count to local storage
- Keyboard support
- Dark/light theme toggle
- Styling refinements and animations
