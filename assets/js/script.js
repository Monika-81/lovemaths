//Wait for the DOM to finishloading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for ( let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition');
})

/**The main game "loop", called when the scriot is first loaded
 * and after the user's answer has been proceesed
 */
function runGame(gameType) {

    //create two random numbers
    let num1 = Math.floor(Math.random() * 25) + 1; 
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else { 
        alert(`Unknown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operator').textContent = "+"
    document.getElementById('operand2').textContent = operand2;

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}