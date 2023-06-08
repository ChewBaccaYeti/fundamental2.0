const toggle = () => {
	const toggleItems = document.querySelectorAll('.toggle-list_item')

	toggleItems.forEach((item) => {
		const button = item.querySelector('button')
		const vector = item.querySelector('.vector')

		item.addEventListener('click', () => {
			const toggleTextElements = item.querySelectorAll('.toggle-text')
			const toggleContent = item.querySelector('.toggle-content')

			toggleTextElements.forEach((textElement) => {
				textElement.classList.toggle('active')
				animateElement(textElement)
			})

			toggleContent.classList.toggle('expanded')
			vector.classList.toggle('rotate')
		})

		item.addEventListener('mouseover', () => {
			vector.classList.add('hover')
		})

		item.addEventListener('mouseout', () => {
			vector.classList.remove('hover')
		})
	})
}

const animateElement = (element) => {
	element.style.transition = 'opacity 0.3s ease'
	element.style.opacity = element.classList.contains('active') ? '1' : '0'
}

toggle()
