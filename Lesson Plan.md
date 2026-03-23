# Puginarug Tutorial Lesson Plan

This lesson guide is designed for Jasmine Kate Arthur. It requires a simple text editor or a browser-based editor.

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

## Each of the following lessons can be summarized with the following five steps.


1. make one small change to aone of the component files
3. refresh the browser
4. look for what changed
5. explain why it changed

Tip:  Avoid changing many things at once.

---

## Lesson 1:  Let's get started and meet the files

### Goals
1 Introduction to some of the terms used in this tutorial.
2 Understand that a website is made of separate files with different jobs.

## Glossary of terms used here.

repo:  is short for repository and it is just a folder or set of folders where we can store files that we want to use when building the website.
assets/pug.png:  this tells us there is a file called "pug.png" inside the folder called "assets"

### What files in the repository as used by the website

- HTML says what is on the page
- JavaScript makes things happen
- image files are pictures used by the page

### Activity
Open the repo and identify:

- `index.html`
- `index.js`
- `assets/pug.png`

Then open the page in the browser by opening this link: https://justinarthur321.github.io/puginarug_tutorial

### Success check
Can you point to each file and say what it does?

---

## Lesson 2: Change something in HTML

### Goal
See that HTML changes what appears on the page.

### Activity
Open `index.html` and change a small piece of visible text.

Ideas:

- change the page title
- change the word 
- add one extra sentence above or below the timer

Save the file and refresh the browser.

### Success check
The learner sees the change appear in the browser and understands that HTML controls the page content.

---

## Lesson 3: See how JavaScript connects to HTML

### Goal
Understand that JavaScript can find parts of the page and control them.

### Explain
Show these HTML pieces:

- the `<canvas>`
- the `.seconds` text
- the `.grade` text

Then show the matching JavaScript:

```javascript
document.querySelector("canvas")
document.querySelector(".seconds")
document.querySelector(".grade")
```

Explain that JavaScript uses these selectors to find the right part of the page.

### Success check
The learner can match each HTML element to the JavaScript line that uses it.

---

## Lesson 4: Change a number in JavaScript

### Goal
See that JavaScript controls behaviour, not just text.

### Activity
Open `index.js` and change one small number.

Safe examples:

- how many pugs appear
- how far apart they are
- how quickly something moves

Save and refresh.

### Success check
The learner notices that the program behaves differently because the JavaScript changed.

---

## Lesson 5: Change the level names

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
The learner sees that the text changes automatically during the program.

---

## Lesson 6: Add comments

### Goal
Learn that comments help humans understand code.

### Explain
Comments are notes for people. The computer ignores them.

### Activity
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
The learner can explain what a comment is and why it helps.

---

## Lesson 7: Make it personal

### Goal
Use creativity to make the project feel like her own.

### Activity ideas

Choose one or two:

- replace the pug image with another image
- change the level names to family names
- change the background colour
- add a funny sentence
- rename the project in the page title

### Success check
The learner feels ownership of the project.

---

## Lesson 8: Mini challenge

### Goal
Build confidence through a small independent task.

### Challenge
Ask the learner to do three things:

1. change one visible word in HTML
2. change one number in JavaScript
3. add one comment

Then refresh the browser and explain the result.

### Success check
The learner can make a small edit without being led through every click.

---

## Parent notes


### One change at a time
When something breaks, it is much easier to fix if only one thing changed.

### Celebrate experiments
If the page looks strange after an edit, that is still useful learning.

### Use plain language
Prefer:
- 
- 
- 

Avoid too much technical vocabulary too early.

---

## Good first edits

These are safe beginner edits:

- change the page title in `index.html`
- change the starting word `Assistant`
- change one level name in `index.js`
- add one HTML comment
- add one JavaScript comment

---

## File safety reminder

If using a plain text editor:

- keep the file names exactly correct
- do not let `index.html` become `index.html.txt`
- do not let `index.js` become `index.js.txt`

---

## Recommended repo location

A good place for this guide is:

```text
LESSON_PLAN.md
```

or

```text
docs/LESSON_PLAN.md
```

For a simple tutorial repo, placing it in the top level as `LESSON_PLAN.md` is probably easiest.