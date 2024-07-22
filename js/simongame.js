/*-------------------------------- Constants --------------------------------*/

const GREEN = "G";
const RED = "R";
const YELLOW = "Y";
const BLUE = "B";

/*---------------------------- Variables (state) ----------------------------*/


// - AI Buttons pattern
// - Light pattern
// - Player Buttons record

/*------------------------ Cached Element References ------------------------*/

const greenButton = document.getElementById("simon-btn-top-left");
const redButton = document.getElementById("simon-btn-top-right");
const yellowButton = document.getElementById("simon-btn-btm-left");
const blueButton = document.getElementById("simon-btn-btm-right");

// const buttons = {
//     [GREEN]: greenButton,
//     [RED]: redButton,
//     [YELLOW]: yellowButton,
//     [BLUE]: blueButton,
// };

const buttons = [greenButton, redButton, yellowButton, blueButton];

const yourScore = document.getElementById("score");
const highScore = document.getElementById("high");

/*-------------------------------  Render Functions --------------------------*/

/*-------------------------------- Functions --------------------------------*/

let count = 0;
const handleYourScore = (event) => {
    // if (event.target.id === "simon-btn-top-left") {
    //     count++;
    // } else if (event.target.id === "simon-btn-top-right") {
    //     count++;
    // } else if (event.target.id === "simon-btn-btm-left") {
    //     count++;
    // } else if (event.target.id === "simon-btn-btm-right") {
    //     count++;
    // }
    for (let i = 0; i < buttons.length; i++) {
        if (event.target === buttons[i]) {
            count++;
        }
    }
    yourScore.textContent = "Your Score: " + count;
};

/*----------------------------- Event Listeners -----------------------------*/


greenButton.addEventListener("click", handleYourScore);
redButton.addEventListener("click", handleYourScore);
yellowButton.addEventListener("click", handleYourScore);
blueButton.addEventListener("click", handleYourScore);