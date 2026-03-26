# Puginarug Challenge Plan

This challenge is designed for Jasmine Kate Arthur. It requires a simple text editor or a browser-based editor.

## What this project teaches

This project aims to teach the fundamental components needed when building a website as follows:

- `index.html` creates the page
- `index.js` makes the page do things
- `assets/pug.png` is the image used by the code

The key learning idea is:

**HTML creates the thing. JavaScript finds the thing. JavaScript changes the thing.**

---

## What tools are needed

A learner can do this project with:

- a simple text editor, or
- a browser-based editor such as `github.dev` or `vscode.dev`
- a web browser to run the page


---

## Each of the following challenges can be summarized with the following five steps.


1. make one small change to one of the component files
3. refresh the browser
4. look for what changed
5. explain why it changed

Tip:  Avoid changing many things at once.

---

## Challenge 1:  Let's get started

### Goals
1 Introduction to some of the terms used in this tutorial.
2 Understand that a website is made of separate files with different jobs.

## Glossary of terms used here.

repo:  is short for repository and it is just a folder or set of folders where we can store files that we want to use when building the website.

file path: is the direction used in code to tell the computer where a file is located and what it is called eg "assets/pug.png" this tells us there is a file called "pug.png" inside the folder called "assets"

commit: is saving a file in a repo to become the current live version

CSS: Stands for "Cascading Style Sheets". CSS is the language that controls how a webpage looks — colours, sizes, positions, fonts, and animations. HTML builds the structure of the page, and CSS makes it pretty. In this project, all the CSS lives inside the `<style>` tag in `index.html`.

canvas: A canvas is a blank drawing area in the webpage. JavaScript can paint pictures on it.

z-index: A number that controls which things appear in front of or behind other things on the page. A higher z-index means "closer to you" — like stacking pieces of paper, the one on top has the highest number.

animation: A way to make something on the page move or change over time. CSS can create animations without needing JavaScript.

@keyframes: The CSS instruction that describes how an animation should change from start to finish. You give it a name (like "matrix-fall") and tell it what to do at the beginning and end.

opacity: How see-through something is. 0 means invisible, 1 means fully solid. Numbers in between make things partly transparent.

aria-hidden: A label you can put on a piece of HTML to tell screen readers (tools that read web pages aloud for people who cannot see the screen) to skip over it. We use it on decorative things that are not meant to be read.

div: Short for "division". A div is an invisible box in HTML used to group other things together. Think of it like a container or a folder that holds parts of your page.

### What files in the repository are used by the website

- HTML says what is on the page
- JavaScript makes things happen
- image files are pictures used by the page

### Activity
Open the repo and identify:

- `index.html`
- `index.js`
- `assets/pug.png`

Then open the webpage in the browser by opening this link: https://justinarthur321.github.io/puginarug_tutorial

### Success check
Can you point to each file in the repo and say what it does?

---

## Challenge 2: Change something in HTML

### Goal
See that HTML changes what appears on the page.

### Activity
Open `index.html` and make some small changes to piece of visible text.

## Change 1 
change the page title
Commit the file and refresh the browser.
Tip: you can use the refresh button in your browser or use the short cut keys ctl+r

### Success check
Check you can see the change appear in the browser and understands that HTML controls the page content
Tip:  Dont panic, you may have to be patient for as long as 10 minutes for the repo to push your commit and make the changes visable

## Change 2
add one extra sentence above or below the timer
### Success check
Check you can see the change appear in the browser and understands that HTML controls the page content.


---

## Challenge 3: See how JavaScript connects to HTML

### Goal
Understand that JavaScript can find parts of the page and control them.

### Explain
Find these HTML pieces:

- the `<canvas>`
- the `.seconds` text
- the `.grade` text

Tip: you can look through the code manually or you can copy the piece you are looking for the paste it into the find tool and let the the machine do the work.  "Just hold on a second dad" I hear you say..."Where is the find tool?"  
Tip:  Use the short cut key ctl+f to open the find tool.


Now open `index.js` and find the matching JavaScript:

```javascript
document.querySelector("canvas")
document.querySelector(".seconds")
document.querySelector(".grade")
```

JavaScript uses these selectors to find the right part of the page to do what it needs to do.

### Success check
Can you match each HTML element to the JavaScript line that uses it?

---

## Challenge 4: Change a number in JavaScript

### Goal
See that JavaScript controls behaviour, not just text.

### Activity
Open `index.js` and change one small number at a time

# Change 1 
Change how many pugs appear
Commit the file and refresh the browser.


### Success check
Check you can see the change appear in the browser and understand how thist piece of the JavaScript controls how the page appears
Tip:  Dont panic, you may have to be patient for as long as 10 minutes for the repo to push your commit and make the changes visable

# Change 2
Change how far apart our puggy wuggies appear
Commit the file and refresh the browser.


### Success check
Check you can see the change appear in the browser and understand how thist piece of the JavaScript controls how the page appears


# Change 3
Change how much the mouse can "pull" the puggy wuggy woooo
Commit the file and refresh the browser.


### Success check
Check you can see the change appear in the browser and understand how thist piece of the JavaScript controls how the page appears

---

## Challenge 5: Change the level names

### Goal
See that JavaScript can decide what words appear as time passes.

### Activity
Find the `levels` object in `index.js` and replace some names with fun custom names.

Example ideas:

- Pug Fan
- Pug Hero
- Pug Master
- Queen of Pugs

Save and refresh.

### Success check
Can you understand how the JavaScript changes the text automatically, from one level to another, while the program is running?

---

## Challenge 6: Add comments

### Goal
Learn that comments help humans understand code.

### Explaination
Comments are notes for people. We use special caracters that tell the computer to ignores comments which would otherwise create an error for the computer.
Each computer language has its own special caracters that it uses to identify comments.
In HTML:        /* "your  comments go here and can continue from many lines until you add the caracters again, this time swapped around " */
In JavaSrcipt:  // "your comments go here and stop when a new line is created

### Activity
See how these special caracters are used to creat comments in both the HTML and JavaScript files
Add a comment above one important part of the HTML and one important part of the JavaScript.

Example in HTML:

```html
<!-- This is where JavaScript draws the pug -->
<canvas></canvas>
```

Example in JavaScript:

```javascript
// Find the canvas so we can draw on it
const canvas = document.querySelector("canvas");
```

### Success check
Can explain what a comment is and why it helps?

---

## Challenge 7: Make it personal

### Goal
Use creativity to make the project feel like your own.

### Activity

- replace the pug image with another image
- change the background colour
- add a funny sentence

### Success check
Have fun with this project and your new coding skills

---

## Challenge 8: What Next?

### Goal
Understand the functional features of the webpage.

### Challenges
1 What do you think are the funtional features of this webpage?
2 What are the things that cause the webpage's display to change when it is runing?
3 Find the pieces of Javascript which create these changes 
4 Think about a new webpage that you might like to make that would use these same functional features 

### Success check
Are you thinking?
---
