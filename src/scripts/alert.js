const hero = document.querySelector('.hero-section')
const vanGogh = document.querySelector('.escape-section')
const program = document.querySelector('.program-section')
const questions = document.querySelector('.questions-section')

hero.addEventListener('click', () => {
	alert('Hero!')
})

vanGogh.addEventListener('click', () => {
	alert('Escape.')
})

program.addEventListener('click', () => {
	alert('Program for kids.')
})

questions.addEventListener('click', () => {
	alert('Questions and toggle packs.')
})
