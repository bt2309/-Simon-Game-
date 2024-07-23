/*-------------------------------- Constants --------------------------------*/

const GREEN = "Green";
const RED = "Red";
const YELLOW = "Yellow";
const BLUE = "Blue";

/*---------------------------- Variables (state) ----------------------------*/

const compChoice = [];
let playerChoice = [];
let score = 0;

// - Light pattern

/*------------------------ Cached Element References ------------------------*/

const startButton = document.getElementById("start-button");

const greenButton = document.getElementById("simon-btn-top-left");
const redButton = document.getElementById("simon-btn-top-right");
const yellowButton = document.getElementById("simon-btn-btm-left");
const blueButton = document.getElementById("simon-btn-btm-right");

const buttons = [greenButton, redButton, yellowButton, blueButton];

const scoreCount = document.getElementById("score");

/*-------------------------------  Render Functions --------------------------*/

// const render = () => {
//     addToCompChoice();
//     handlePlayerChoice();
// }

/*-------------------------------- Functions --------------------------------*/


// to commence the beginning of a round of Simon
const startGame = () => {
    addToCompChoice();
    console.log(compChoice); //TODO delete aft checking
};

// add the next colour to the sequence for Computer
const addToCompChoice = () => {
    const colors = [GREEN, RED, YELLOW, BLUE];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    compChoice.push(randomColor);
};

// to check if Player's Choice = Computer's Choice
const checkChoice = () => {
    for (let i = 0; i < playerChoice.length; i++) {
    if (playerChoice[i] === compChoice[i]) {
        return true;
    } else {
        return false;
    }
}
};

// to add the Player's seleceted color into Player's sequence
const handlePlayerChoice = (event) => {
    if (event.target === greenButton) {
        playerChoice.push(GREEN);
    } else if (event.target === redButton) {
        playerChoice.push(RED);
    } else if (event.target === yellowButton) {
        playerChoice.push(YELLOW);
    } else if (event.target === blueButton) {
        playerChoice.push(BLUE);
    }
    console.log(playerChoice); //TODO delete aft checking
};






// let count = 0;
// const handlePlayerChoice = (event) => {
//     for (let i = 0; i < buttons.length; i++) {
//         if (event.target === buttons[i]) {
//             count++;
//         }
//     }
//     scoreCount.textContent = "Your Score: " + count;
// };

// render();

/*----------------------------- Event Listeners -----------------------------*/

startButton.addEventListener("click", startGame);

greenButton.addEventListener("click", handlePlayerChoice);
redButton.addEventListener("click", handlePlayerChoice);
yellowButton.addEventListener("click", handlePlayerChoice);
blueButton.addEventListener("click", handlePlayerChoice);
