/*-------------------------------- Constants --------------------------------*/

const GREEN = "Green";
const RED = "Red";
const YELLOW = "Yellow";
const BLUE = "Blue";

/*---------------------------- Variables (state) ----------------------------*/

// const game = {
//     compChoice: [],
//     playerChoice: [],
//     turn: "",
//     status: "",
//     score: 0,
// };

let sequence = [];
let playerSequence = [];
let level = 0;


/*------------------------ Cached Element References ------------------------*/

const startButton = document.getElementById("start-button");
const info = document.querySelector(".info");
const heading = document.getElementById("game-name");
const simonBoard = document.querySelector(".simon-board");
// const resetButton = document.getElementById("reset-button");

// const greenButton = document.getElementById("top-left");
// const redButton = document.getElementById("top-right");
// const yellowButton = document.getElementById("btm-left");
// const blueButton = document.getElementById("btm-right");

// const buttons = [greenButton, redButton, yellowButton, blueButton];

// const scoreCount = document.getElementById("score");

/*-------------------------------  Render Functions --------------------------*/

// const updateMessage = () => {

// };

// const render = () => {
//     updateMessage();
//     addToCompChoice();
//     handlePlayerClick();
//     yourScore();

// }

/*-------------------------------- Functions --------------------------------*/

// restart game function
// const init = () => {
//     game.playerChoice.length = 0;
//     game.compChoice.length = 0;
//     for (let i = 0; i < game.compChoice.length; i++) {
//         game.playerChoice.push("");
//         game.compChoice.push("");
//     }
//     game.turn = game.compChoice;
//     game.status = "";
//     render();
// };


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
    const nextSequence = [...sequence]; // copy all values of previous sequence over to the next
    nextSequence.push(nextStep()); // push the comp chosen color into the next sequence array
    playRound(nextSequence); // iterate over the updated sequence with a new color added

    sequence = [...nextSequence]; // since player's turn has to take place right after computer's
    setTimeout (() => {           // turn, an artificial delay needs to be added in.
        humanTurn(level);
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
    simonBoard.classList.remove("unclickable");
    info.textContent = "Your Turn 👋";
}








// const startGame = () => {
//     game.compChoice.push(GREEN, RED); //TODO temporary just to test if my function work
//     console.log(game.compChoice); //TODO delete aft checking
// };

// add the next colour to the sequence for Computer
//TODO ignore till i get the basic sequence to run first
// const addToCompChoice = () => {
//     const colors = [GREEN, RED, YELLOW, BLUE];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     game.compChoice.push(randomColor);
// };

// to check if Player's Choice = Computer's Choice

// const checkChoice = () => {
//     let playerChoice = game.playerChoice;
//     let compChoice = game.compChoice;

//     if (playerChoice === compChoice) {
//         message.textContent = "Keep going!";
//         return console.log("Won");
//     }
//     if (playerChoice !== compChoice) {
//         message.textContent = "Try Again!"
//         return console.log("Lost");
//     }
// }

// const checkChoice = () => {
//     if (game.playerChoice.length === game.compChoice.length) {
//         for (let i = 0; i < game.playerChoice.length; i++) {
//         if (game.playerChoice[i] !== game.compChoice[i]) {
//             return console.log("You Lost");  //TODO change aft testing
//         } else {
//             return console.log("Won");  //TODO change aft testing
//         }
//         }   
//     } else {
//         console.log("You Lost");  //TODO change aft testing
//     }
// };

// const switchTurn = () => {
//     if (game.status) {
//         return;
//     }
//     if (game.turn === game.compChoice) {
//         addToCompChoice();
//     } else {
//         game.turn = game.playerChoice;
//         handlePlayerClick();
//     }
// }
    
// to add the Player's seleceted color into Player's sequence
// const handlePlayerClick = (event) => {
//     if (event.target.classList.contains("simon-btn") &&
//         game.status === "") {
//             let pressedColor = event.target;
//             if (pressedColor === greenButton) {
//                 game.playerChoice.push(GREEN);
//             } else if (pressedColor === redButton) {
//                 game.playerChoice.push(RED);
//             } else if (pressedColor === yellowButton) {
//                 game.playerChoice.push(YELLOW);
//             } else if (pressedColor === blueButton) {
//                 game.playerChoice.push(BLUE);
//             }
//             console.log(game.playerChoice);
//             // console.log(game);
//             // checkChoice();
//             // setTimeout(addToCompChoice, 2000);
//         }
// }

// const handlePlayerClick = (event) => {
//     if (event.target === greenButton) {
//         game.playerChoice.push(GREEN);
//     } else if (event.target === redButton) {
//         game.playerChoice.push(RED);
//     } else if (event.target === yellowButton) {
//         game.playerChoice.push(YELLOW);
//     } else if (event.target === blueButton) {
//         game.playerChoice.push(BLUE);
//     }
//     console.log(game.playerChoice); //TODO delete aft checking
//     checkChoice();
// };


// checkChoice();


// render();


// let count = 0;
// const handlePlayerClick = (event) => {
//     for (let i = 0; i < buttons.length; i++) {
//         if (event.target === buttons[i]) {
//             count++;
//         }
//     }
//     scoreCount.textContent = "Your Score: " + count;
// };

/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener("click", startGame);
// resetButton.addEventListener("click", init);

// greenButton.addEventListener("click", handlePlayerClick);
// redButton.addEventListener("click", handlePlayerClick);
// yellowButton.addEventListener("click", handlePlayerClick);
// blueButton.addEventListener("click", handlePlayerClick);


