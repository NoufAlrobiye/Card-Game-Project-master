let openCards = [];
let match = 0;

// varible of function addMoves
const moves = document.querySelector("#moves")
let movesCounter = 0;

// varible for the timer function
let time = 0;
let timerId = 0; 
let timerOut = true;

//Elements in a varible timer function 
const timer = document.querySelector("#timer")
const restart = document.querySelector(" #restart")
const cards = document.querySelectorAll(".card")


for (let card of cards){
    card.addEventListener("click",function(event){
      if(timerOut){
        initTime();
      }
     event.target.classList.add("open")
     openCards.push(event.target);

     if(openCards.length ==2){
        checkMatch();
        addMove();
        if(movesCounter >= 8 && match < 8){
            removeStars();
        }
    }
 })
}

//function removeStars
function removeStars(){
}

//function checkMatch
function checkMatch(){
    if(openCards[0].children[0].className === openCards[1].children[0].className){
        console.log(openCards);
        openCards[0].classList.add("match");
        openCards[1].classList.add("match");
        openCards = [];
        match++;
        if(match==8){
            setTimeout(() => {
                win()
        }, 1000); 
        }
    }
    else{
        setTimeout(()=>{
            openCards[0].classList.remove("open");
            openCards[1].classList.remove("open");
            openCards = [];
        },1000)
    }
}

//function win
function win() {
    alert('You Win')
}

// use this function to start the timer
const initTime = () => {
    timerOut = false;
    timerId = setInterval( () => {
        time++;
        timerCount();
    }, 1000);
};

//this function update the timer valuse 
const timerCount = () => {
const min = Math.floor(time/60);
const sec = time % 60;
if (sec < 10 ) {
    timer.innerHTML = `${min}:0${sec}`;
    } else {
        timer.innerHTML = `${min}:${sec}`;
    }
};

// stop and clear the timer 
const stopClock = () => {
    clearInterval(timerId);
};

//restart the timer
restart.addEventListener("click", function(){
// const shuffledCards = shuffle(cards);
    stopClock();
    timerOut = true;
    time = 0;
    timerCount();
});


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function addMove() {
    movesCounter++;
    moves.innerHTML= movesCounter;
}


