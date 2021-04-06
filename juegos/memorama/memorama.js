document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'jupiter',
			img: 'images-jupiter.jpg'
		},
		{
			name: 'marte',
			img: 'images/marte.jpg'
		},
		{
			name: 'saturno',
			img: 'images/saturno.jpg'
		},
		{
			name: 'sol',
			img: 'images/sol.jpg'
		},
		{
			name: 'tierra',
			img: 'images/tierra.jpg'
		},
		{
			name: 'jupiter',
			img: 'images-jupiter.jpg'
		},
		{
			name: 'marte',
			img: 'images/marte.jpg'
		},
		{
			name: 'saturno',
			img: 'images/saturno.jpg' 
		},
		{
			name: 'sol',
			img: 'images/sol.jpg'
		},
		{
			name: 'tierra',
			img: 'images/tierra.jpg'
		},
	]	

	cardArray.sort(() => 0.3 - Math.random())

	const grid = document.querySelector('.grid')
	var cardsChosen = []
	var cardsChosenId = []
	const cardsWon = []
	const resultDisplay = document.querySelector('#score')

	function createBoard(){
		for(let i = 1; i<cardArray.length; i++){
			var card = 	document.createElement('img')
			card.setAttribute('src', 'images/back.jpg')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if(optionOneId==optionTwoId){
			cards[optionOneId].setAttribute('src', 'images/back.jpg')
			cards[optionTwoId].setAttribute('src', 'images/back.jpg')
			alert('Hey! estas dandole click a la misma carta')
		}
		else if(cardsChosen[0]===cardsChosen[1]){
			alert('Encontraste un par, ¡genial!')
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			cards[optionOneId].removeEventListener('click', flipCard)
			cards[optionTwoId].removeEventListener('click', flipCard)
			cardsWon.push(cardsChosen)
		}
		else{
			cards[optionOneId].setAttribute('src', 'images/back.jpg')
			cards[optionTwoId].setAttribute('src', 'images/back.jpg')
			alert('intenta de nuevo')
		}
		cardsChosen=[]
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent = "Felicidades, encontraste todos los pares."
		}
	}
	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if(cardsChosen.length === 2){
			setTimeout(checkForMatch, 50)
		}
		
	}

	createBoard()


})