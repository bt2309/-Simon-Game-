/*-------------------------------- Constants --------------------------------*/

const GREEN = "Green";
const RED = "Red";
const YELLOW = "Yellow";
const BLUE = "Blue";

/*---------------------------- Variables (state) ----------------------------*/

const gameState = {
    compChoice: [],
    playerChoice: [],
    score: 0,
};

// - Light pattern

/*------------------------ Cached Element References ------------------------*/

const startButton = document.getElementById("start-button");

const greenButton = document.getElementById("top-left");
const redButton = document.getElementById("top-right");
const yellowButton = document.getElementById("btm-left");
const blueButton = document.getElementById("btm-right");

const buttons = [greenButton, redButton, yellowButton, blueButton];

const scoreCount = document.getElementById("score");

/*-------------------------------  Render Functions --------------------------*/

const render = () => {
    addToCompChoice();
    handlePlayerClick();
    yourScore();

}

/*-------------------------------- Functions --------------------------------*/


// to commence the beginning of a round of Simon
const startGame = () => {
    gameState.compChoice.push(GREEN, RED); //TODO temporary just to test if my function work
    console.log(gameState.compChoice); //TODO delete aft checking
};

// add the next colour to the sequence for Computer
//TODO ignore till i get the basic sequence to run first
const addToCompChoice = () => {
    const colors = [GREEN, RED, YELLOW, BLUE];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameState.compChoice.push(randomColor);
};

// to check if Player's Choice = Computer's Choice
const checkChoice = () => {
    if (gameState.playerChoice.length === gameState.compChoice.length) {
        for (let i = 0; i < gameState.playerChoice.length; i++) {
        if (gameState.playerChoice[i] !== gameState.compChoice[i]) {
            return console.log("You Lost");  //TODO change aft testing
        } else {
            return console.log("Won");  //TODO change aft testing
        }
        }   
    } else {
        console.log("You Lost");  //TODO change aft testing
    }
};

// to add the Player's seleceted color into Player's sequence
const handlePlayerClick = (event) => {
    if (event.target === greenButton) {
        gameState.playerChoice.push(GREEN);
    } else if (event.target === redButton) {
        gameState.playerChoice.push(RED);
    } else if (event.target === yellowButton) {
        gameState.playerChoice.push(YELLOW);
    } else if (event.target === blueButton) {
        gameState.playerChoice.push(BLUE);
    }
    console.log(gameState.playerChoice); //TODO delete aft checking
    checkChoice();
};

const test1 = () => {
    if (gameState.playerChoice.length !== gameState.compChoice.length) {

    }
}
checkChoice();


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

greenButton.addEventListener("click", handlePlayerClick);
redButton.addEventListener("click", handlePlayerClick);
yellowButton.addEventListener("click", handlePlayerClick);
blueButton.addEventListener("click", handlePlayerClick);
