document.addEventListener('DOMContentLoaded', () => {
  const grayPlaceHolder = 'https://via.placeholder.com/100'
  const whitePlaceHolder = 'https://via.placeholder.com/100/fff?text=Done'
  const cardArray = [
    {
      name: 'Image 1',
      img: 'images/13-100x100.jpg'
    },
    {
      name: 'Image 1',
      img: 'images/13-100x100.jpg'
    },
    {
      name: 'Image 2',
      img: 'images/41-100x100.jpg'
    },
    {
      name: 'Image 2',
      img: 'images/41-100x100.jpg'
    },
    {
      name: 'Image 3',
      img: 'images/839-100x100.jpg'
    },
    {
      name: 'Image 3',
      img: 'images/839-100x100.jpg'
    },
    {
      name: 'Image 4',
      img: 'images/994-100x100.jpg'
    },
    {
      name: 'Image 4',
      img: 'images/994-100x100.jpg'
    },
    {
      name: 'Image 5',
      img: 'images/1009-100x100.jpg'
    },
    {
      name: 'Image 5',
      img: 'images/1009-100x100.jpg'
    },
    {
      name: 'Image 6',
      img: 'images/1032-100x100.jpg'
    },
    {
      name: 'Image 6',
      img: 'images/1032-100x100.jpg'
    },

  ];
  cardArray.sort(() => 0.5 - Math.random());

  const cardsChosen = [];
  const cardsChosenId = [];
  const cardsWon = [];  
  
  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result')
  const alertDisplay = document.querySelector('#alert')
  // create board
  function createBoard(){
    for (let i =0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', grayPlaceHolder);
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  }

  // check match
  function matchCards() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
      alert('You fount a match');
      cards[optionOneId].setAttribute('src', whitePlaceHolder)
      cards[optionTwoId].setAttribute('src', whitePlaceHolder)
      cardsWon.push(cardsChosen);
      cards[optionOneId].removeEventListener('click', flipcard);
      cards[optionTwoId].removeEventListener('click', flipcard);
    }else{
      alert('Sorry!, try again.')
      cards[optionOneId].setAttribute('src', grayPlaceHolder)
      cards[optionTwoId].setAttribute('src', grayPlaceHolder)
    }
    cardsChosen.length = 0
    cardsChosenId.length = 0
    resultDisplay.textContent = cardsWon.length
    if( cardsWon.length == cardArray.length/2){
      resultDisplay.textContent = 'Congratulations! You won the Game.'
    }
  }


  // flipcard on click
  function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    // console.log(cardsChosen.length)
    if(cardsChosen.length === 2){
      setTimeout(matchCards, 500)
    }

  }

  this.alert = function(value) {
    alertDisplay.textContent = value
  }

  createBoard();
});