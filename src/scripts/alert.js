const parent = document.querySelector('.toggle-form_container')
const child = document.querySelector('.toggle-list')
const descendant = document.querySelector('.toggle-list_item ')
const hidden = document.querySelector('#hidden')

parent.addEventListener('click', () => {
	alert('Parent click handler')
})

child.addEventListener('click', () => {
	alert('Child click handler')
})

descendant.addEventListener('click', () => {
	alert('Descendant click handler')
})

hidden.addEventListener('click', () => {
	alert('Hidden click handler')
})
