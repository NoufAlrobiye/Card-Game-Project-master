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

// varible

//functions

// event listeners

// AddEventlistener on card on container of cards (deck)
const deck = document.querySelector(#deck)
deck.addEventListener("click", (event) =>{
    console.log(event.target);
    event.target.classList.add("open")
    console.log(event.target);
})


