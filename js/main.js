let resultVl = document.getElementById('result')

let humanScore = 0
let botScore = 0



let box = document.querySelectorAll('.box')
Array.from(box).forEach(x => x.addEventListener('click', game))

function humanChoicefunction(click){

    if(click.target.classList.contains('rock') ){return 'rock'}
    else if(click.target.classList.contains('paper') ){return 'paper'}
    else if(click.target.classList.contains('scissor') ){return 'scissor'}
}

function botChoiceFunction (){
    let randomNo = Math.floor(Math.random() * 3) + 1
    if (randomNo === 1) { return 'rock' }
    else if (randomNo === 2) { return 'paper' }
    else if (randomNo === 3) { return 'scissor'}
}

function game (click){
    let humanChoice = humanChoicefunction(click)
    let botChoice = botChoiceFunction()

    if (humanChoice === botChoice) {
        resultVl.innerText = "It's a draw"
        document.querySelector('.human').innerText = humanScore
        document.querySelector('.bot').innerText = botScore
    }
    else if ((humanChoice === 'rock' && botChoice === 'scissor') || (humanChoice === 'paper' && botChoice === 'rock') || (humanChoice === 'scissor' && botChoice === 'paper')) {
        resultVl.innerText = "You win";
        humanScore++;
        document.querySelector('.human').innerText = humanScore
        document.querySelector('.bot').innerText = botScore

    }
    else {
        resultVl.innerText = "You lose";
        botScore++;
        document.querySelector('.human').innerText = humanScore
        document.querySelector('.bot').innerText = botScore
    }
}



console.log(humanChoice())
console.log(botChoice())