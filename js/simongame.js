/*-------------------------------- Constants --------------------------------*/

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
    startButton.classList.add("hidden"); // hide start button
    info.classList.remove("hidden"); 
    info.textContent = "Wait for the computer 😊"; // visually replace start button with text
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
    const button = document.querySelector(`[data-color="${color}"]`);
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

//* create player's click
const handleClick = (color) => {
    const index = playerSequence.push(color) - 1; // pushes color value into playerSequence array
    const sound = document.querySelector(`[data-sound="${color}"]`); // link sound to click
    sound.play();

    if (playerSequence[index] !== sequence[index]) { // if color chosen by player !== comp
        resetGame("Ouch! Better luck next time, you messed up. 😅"); // reset + alert text
        return;
    }

    if (playerSequence.length === sequence.length) {
        if (playerSequence.length === 20) { // max level of 20
            resetGame("🎊🤩WOW ! You defeated the game!!!🤩🎊"); // reset + congrat text
            return
        }
        playerSequence = []; // reset playerSequence array
        info.textContent = "Success! Keep going! 💪"; // replace text to indicicate correct answer
        setTimeout (() => {
            nextRound();
        }, 1000); // create delay before the start of next round
        return;
    }
}

//* create reset function for when the player gets the wrong sequence, to restore game to original state
const resetGame = (text) => {
    alert(text); // make an alert text pop up
    sequence = []; // reset sequence
    playerSequence = []; // reset player's sequence
    level = 0; // reset level back to 0
    startButton.classList.remove("hidden"); // bring back the start button again
    heading.textContent = "Simon Game"; // bring back the name of game
    info.classList.add("hidden"); // hide text e.g. "Wait for..." & "Your Turn..." & "Success! ..."
    simonBoard.classList.add("unclickable"); // make the buttons unclickable to prepare for new game
}



/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener("click", startGame);
simonBoard.addEventListener("click", event => {
    const {color} = event.target.dataset; // value of data-color on clicked element is accessed.
    if (color) handleClick(color);
});


