const cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)
const cardChosen = []
const chosenID = []
let result = 0

const gridDisplay = document.querySelector('#game-board')
const scoreDisplay = document.getElementById('score')



function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipboard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch () {

    const cards = document.querySelectorAll('#game-board img')

    if(cardChosen[0] === cardChosen[1]) {

        console.log("Found a Match")
        result++
        scoreDisplay.innerText = result
        cards[chosenID[0]].setAttribute('src', 'images/white.png')
        cards[chosenID[1]].setAttribute('src', 'images/white.png')

        // make them unclickable
        cards[chosenID[0]].removeEventListener('click', flipboard)
        cards[chosenID[1]].removeEventListener('click', flipboard)

    } else {

        cards[chosenID[0]].setAttribute('src', 'images/blank.png')
        cards[chosenID[1]].setAttribute('src', 'images/blank.png')

    }

    cardChosen.length = 0
    chosenID.length = 0
}

function flipboard(){

    const clickId = this.getAttribute('data-id')
    console.log("clicked", clickId)
    cardChosen.push(cardArray[clickId].name)
    console.log(cardChosen)
    this.setAttribute('src', cardArray[clickId].img)
    chosenID.push(clickId)
    if(cardChosen.length === 2)
    {
        setTimeout(checkMatch, 500);
    }

} 


