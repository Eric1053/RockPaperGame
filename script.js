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
    console.log(ps);
    console.log(computerSelection);
    if(ps == computerSelection){
        return "Tie!";
    }
    else if((ps == "rock" && computerSelection == "scissors")|| (ps == "paper" && computerSelection == "rock")){
        return "You Won!";
    }else return "You Lost!";
}
function calculateScore(result){
    if(result == 'Tie!'){
    }else if(result == 'You Won!'){
        return playerCount++;
    }else{
        return computerCount++;
    }
}
let pageName = document.querySelector(".pageHeader");
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
let count;
let playerCount = 0;
let computerCount = 0;
btn1.addEventListener('click', ()=> {
    let result = playRound('Rock', getComputerChoice());
    calculateScore(result); 
    h2.textContent = result;
    pageName.appendChild(h2);
    div.textContent = " Player Score: " + `${playerCount}` + `  Computer Score ${computerCount}`;
    document.body.appendChild(div);
});
btn2.addEventListener('click', ()=> {
    let result = playRound('Scissors', getComputerChoice());
    calculateScore(result); 
    h2.textContent = result;
    pageName.appendChild(h2);
    div.textContent = " Player Score: " + `${playerCount}` + `  Computer Score ${computerCount}`;
    document.body.appendChild(div);
});
btn3.addEventListener('click', ()=> {
    let result = playRound('Paper', getComputerChoice());
    calculateScore(result); 
    h2.textContent = result;
    pageName.appendChild(h2);
    div.textContent = " Player Score: " + `${playerCount}` + `  Computer Score ${computerCount}`;
    document.body.appendChild(div);
});