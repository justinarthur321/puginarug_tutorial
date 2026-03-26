// Find important HTML elements so JavaScript can use them.
const canvas = document.querySelector("canvas");
const secondsCount = document.querySelector(".seconds");
const level = document.querySelector(".grade");

// The canvas context is the drawing tool for the canvas.
const context = canvas.getContext("2d");

// These numbers describe the base size of the pug image.
const pugDimensions = {
  width: 353 * 1.2,
  height: 325 * 1.2,
};

// This object says which title appears at certain second counts.
const levels = {
  5: "Sr Assistant",
  10: "Jr Honoror",
  15: "Master Honoror",
  35: "Sr Tier Honoror",
  65: "Junior Acolyte",
  105: "Acolyte",
  150: "Senior Acolyte",
  250: "Priest",
  450: "Sage",
  650: "Hermit",
  1000: "Senior Hermit",
  1500: "CEO",
  2500: "Pope",
  3500: "Underlord",
  4500: "Lord",
  10500: "OverLord",
  20500: "King",
  30500: "Anunnaki",
};

// Remember the moment the page started.
const startTime = Date.now();

// Make the canvas the same size as the browser window.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Move the drawing origin to the center of the screen.
context.translate(window.innerWidth / 2, window.innerHeight / 2);

// Load the pug picture that will be drawn on the canvas.
const image = new Image();
image.src = "./assets/pug.png";

// How many pugs are layered on the screen.
const loopingPugs = 40;

// How far apart the expanding pugs are.
const offsetDistance = 120;

// This changes every frame to create movement.
let currentOffset = 0;

// This controls how much the mouse can "pull" the drawing.
const movementRange = 5000;

// Where the mouse wants the pugs to move.
const mouseOffset = {
  x: 0,
  y: 0,
};

// Where the pugs are currently moving right now.
const movementOffset = {
  x: 0,
  y: 0,
};

// Wait until the image is ready before starting the animation.
image.onload = () => {
  startLooping();
};

// If the browser window changes size, resize the canvas too.
window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Reset transforms, then move the origin back to the center.
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.translate(window.innerWidth / 2, window.innerHeight / 2);
};

// Watch mouse movement so the pugs can drift with the pointer.
window.addEventListener("mousemove", onMouseMove);

// Draw one pug at a specific size and offset.
function draw(offset, loopCount) {
  // Pugs farther away move a bit less than the front ones.
  const currentPercentage = (loopingPugs - loopCount) / loopingPugs;

  context.drawImage(
    image,
    -pugDimensions.width / 2 - offset / 2 + movementOffset.x * currentPercentage,
    -pugDimensions.height / 2 - offset / 2 + movementOffset.y * currentPercentage,
    pugDimensions.width + offset,
    pugDimensions.height + offset
  );
}

// Convert mouse position into a smaller offset value.
function onMouseMove(event) {
  mouseOffset.x =
    ((event.clientX - window.innerWidth / 2) / window.innerWidth / 2) *
    movementRange;

  mouseOffset.y =
    ((event.clientY - window.innerHeight / 2) / window.innerHeight / 2) *
    movementRange;
}

// "Lerp" means slide smoothly from one number toward another.
function lerp(start, end, amount) {
  return start * (1 - amount) + end * amount;
}

// This function runs again and again to animate the scene.
function loopDraw() {
  // Ease the current movement toward the mouse target.
  movementOffset.x = lerp(movementOffset.x, mouseOffset.x, 0.05);
  movementOffset.y = lerp(movementOffset.y, mouseOffset.y, 0.05);

  // Draw many pugs from largest/back to smallest/front.
  for (let i = loopingPugs; i >= 1; i--) {
    draw(i * offsetDistance + currentOffset, i);
  }

  // Draw one more pug in front.
  draw(offsetDistance, 1);

  // Advance the moving ring effect.
  currentOffset++;

  if (currentOffset >= offsetDistance) {
    currentOffset = 0;
  }

  // Work out how many seconds have passed.
  const newTime = Math.floor((Date.now() - startTime) / 1000);

  // Update the number shown in the HTML.
  secondsCount.innerText = newTime;

  // If this second has a matching title, show it in the HTML.
  if (levels[newTime]) {
    level.innerText = levels[newTime];
  }

  // Ask the browser to draw the next animation frame.
  requestAnimationFrame(loopDraw);
}

// Start the animation loop.
function startLooping() {
  requestAnimationFrame(loopDraw);
}