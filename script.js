function getComputerChoice(){
    let randomHand = Math.floor(Math.random() * 100)
    if (randomHand <= 33){
        return "scissors";
    }else if (randomHand > 33 & randomHand <= 66){
        return "rock";
    }else return "paper";
}
function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toLowerCase();
    if(ps == computerSelection){
        return "Tie!";
    }
    else if((ps == "rock" && computerSelection == "scissors")|| (ps == "paper" && computerSelection == "rock")){
        return "You Won!";
    }else return "You Lost!";
}
function calculateScore(result){
    if(result == 'You Won!'){
        playerCount++;
    }else if(result=='You Lost!'){
        computerCount++;
    }
}
function createResetButton(){
    const reset = document.createElement('button');
    reset.classList.add('reset-button');
    reset.textContent = "RESTART GAME?";
    reset.addEventListener('click',resetGame);

    const resetButtonContainer = document.getElementById('resetButtonContainer');
    resetButtonContainer.appendChild(reset);
}
function resetGame(){
    computerCount = 0;
    playerCount = 0;
    const resetButton = document.querySelector('.reset-button');
    if(resetButton){
        resetButton.parentNode.removeChild(resetButton);
    }
    div.textContent = "Player Score: " + `${playerCount}` + ` Computer Score ${computerCount}`;
    computer.style = '';
    user.style = '';
    canPlay= true;
    h2.textContent='';
}

function highlightWinner(elem){
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;
    elem.style.border = "dotted 3px violet"
}
let canPlay = true;
let playerCount = 0;
let computerCount = 0;
let pageName = document.querySelector(".pageHeader");
let div = document.createElement('div');
div.classList.add('scoreboard');
let btns = document.querySelector('.buttons')
let h2  = document.createElement('h2');
const user = document.querySelector('.user-name');
const computer = document.querySelector('.computer-name');
h2.classList.add('result');
pageName.appendChild(h2);
btns.addEventListener('click', (event) =>{
    if(!canPlay){
        return;
    }
    let target = event.target;
    let playersHand;
    console.log('TEST');
    switch(target.className){
        case 'btn-rock':
            playersHand = 'Rock';
            break;
        case 'btn-paper':
            playersHand = 'Paper';
            break;
        case 'btn-scissors':
            playersHand = 'Scissors';
            break;
    }

    let result = playRound(playersHand,getComputerChoice());
    calculateScore(result);

    h2.textContent = result;
    pageName.appendChild(h2);

    if (playerCount == 5) {
        // Delay the creation of the reset button
        setTimeout(() => {
            createResetButton();
            highlightWinner(user);
            canPlay = false;
        }, 10);
    } else if (computerCount == 5) {
        // Delay the creation of the reset button
        setTimeout(() => {
            highlightWinner(computer);
            createResetButton();
            canPlay = false;
        }, 10);
    }
    div.textContent = "Player Score: " + `${playerCount}` + ` Computer Score ${computerCount}`;
    document.body.appendChild(div);

})
/*
let h2 = document.createElement('h2');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
let div = document.createElement('div');
btn1.textContent='Rock';
btn2.textContent='Scissors';
btn3.textContent='Paper';
document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
*/
