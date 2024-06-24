// alert("Welcome")

const music = new Audio("music.mp3");
const ting = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");
let isGameOver = false;
const winningImage = document.querySelector('#winning-image');
let turn = "X";


function changeTurn() {
    if (turn === "X") {
        turn = "0";
    } else {
        turn = "X";
    }
}

function checkWinning() {
    let boxText = document.getElementsByClassName("box-text");
    let playerTurn = document.querySelector('.player-turn');
    
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e =>{
        console.log(e[0]);
        console.log(boxText[e[0]].innerText);
        if((boxText[e[0]].innerText == boxText[e[1]].innerText) && (boxText[e[1]].innerText == boxText[e[2]].innerText) && boxText[e[0]].innerText !== '') {
            playerTurn.innerText = "Player " + boxText[e[0]].innerText + " wins";
            winningImage.src = 'excited.gif'
            setTimeout(() =>{
                gameOver.play();
            }, 1000)
            isGameOver = true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".box-text");
    let playerTurn = document.querySelector('.player-turn');
    playerTurn.innerText = `Player ${turn} turn`;
    element.addEventListener('click', ()=>{
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            ting.play();
            changeTurn();
            checkWinning();
            if (!isGameOver) {
                playerTurn.innerText = `Player ${turn} turn`;
            }
        } 
    })
})

let resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener('click', ()=>{
    let boxText = document.querySelectorAll('.box-text');
    let playerTurn = document.querySelector('.player-turn')
    Array.from(boxText).forEach(element =>{
        element.innerText = '';
        turn = "X";
        playerTurn.innerText = `Player ${turn} turn`;
        winningImage.src = '';
        isGameOver = false;
    })
})

