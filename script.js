console.log("Welcome to Tic Tac Toe");
let music = new Audio("night-run-125181.mp3");
let audioTurn = new Audio("bicycle-bell_19-80368.mp3");
let gameover = new Audio("night-run-125181.mp3");
let turn = "X";
let isgameover = false;
let win = false;
let count = 0;
//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
    count++;
}
//Function to check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]
    wins.forEach(e => {
         if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[1]].innerText !== '') && count < 10){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.getElementById('container').style.pointerEvents = 'none';
            win = true;
        }
    })
}
music.play();
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');//query selector is used to return the first element that matches a specified CSS selector(s) in the document.
    element.addEventListener('click', () => {
        if (boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
                gameover.play();
            }
            if (!win && count == 9) {
                document.querySelector('.info').innerText = "game is draw!";
                isgameover = true;
            }
             document.getElementById('container').style.pointerEvents = 'auto';
        }
    })
})

//Add onclick listener to reset button


reset.addEventListener('click',()=> {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})




