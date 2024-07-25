/*-------------------------------- Constants --------------------------------*/

const GREEN = "Green";
const RED = "Red";
const YELLOW = "Yellow";
const BLUE = "Blue";

/*---------------------------- Variables (state) ----------------------------*/

let sequence = [];
let playerSequence = [];
let level = 0;


/*------------------------ Cached Element References ------------------------*/

const startButton = document.getElementById("start-button");
const info = document.querySelector(".info");
const heading = document.getElementById("game-name");
const simonBoard = document.querySelector(".simon-board");

/*-------------------------------  Render Functions --------------------------*/


/*-------------------------------- Functions --------------------------------*/

//* to commence the beginning of a round of Simon
const startGame = () => {
    startButton.classList.add("hidden");
    info.classList.remove("hidden");
    info.textContent = "Wait for the computer 😊";
    nextRound(); // start off the 1st round
}

//* to start the next sequence of color clicks
const nextRound = () => { 
    level += 1;

    simonBoard.classList.add("unclickable"); // add back "pointer-event: none" in css
    info.textContent = "Wait for the computer 😊";
    heading.textContent = `Level ${level} of 20`; // indicate level reached

    const nextSequence = [...sequence]; // copy all values of previous sequence over to the next
    nextSequence.push(nextStep()); // push the comp chosen color into the next sequence array
    playRound(nextSequence); // iterate over the updated sequence with a new color added

    sequence = [...nextSequence]; // since player's turn has to take place right after computer's
    setTimeout (() => {           // turn, an artificial delay needs to be added in.
        playerTurn(level);
    }, level * 600 + 1000); // trial and error
}

//* to make computer choose a random color to add to sequence
const nextStep = () => {
    const colors = ["green", "red", "yellow", "blue"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    return random;
}

//* link the selected color to give off a sound
//* and subsequently unselect the color after 300ms
//* which also means there's 300ms between color activations
const activateButton = (color) => {
    const button = document.querySelector(`[id="${color}"]`);
    const sound = document.querySelector(`[data-sound="${color}"]`);

    button.classList.add("activated");
    sound.play();

    setTimeout(() => {
        button.classList.remove("activated");
    }, 300);
}

//* iterate over the next sequence
//* allocate 600ms interval per value in sequence, avoiding all the tiles
//* activating all at once.
const playRound = (nextSequence) => {
    nextSequence.forEach((color, index) => {
        setTimeout (() => {
            activateButton(color);
        }, (index + 1) * 600);
    });
}

//* indicate player's turn to repeat sequence
const playerTurn = () => {
    simonBoard.classList.remove("unclickable"); // to lift "point-event: none" in css
    info.textContent = "Your Turn 👋";
}


/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener("click", startGame);



