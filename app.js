let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;
let highScore = 0; // Variable to track the highest score

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 100);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash"); 
    }, 100);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    
    gameFlash(randBtn);
}

function checkSeq(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        // Update the highest score if the current level is greater
        if (level > highScore) {
            highScore = level;
        }
            h2.innerHTML = `Game Over! Your Score: ${level}<br> Highest Score: ${highScore}<br>Press any key to restart`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            }, 150);
            resetGame();
    }
}


function btnPress(){
   
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq(userSeq.length -1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function resetGame(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}