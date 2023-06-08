const templateSource = document.getElementById('header-template').innerHTML

const template = Handlebars.compile(templateSource)

const data = {
	items: [
		{ label: 'За нас', url: '#' },
		{ label: 'Рожден ден', url: '#' },
		{ label: 'Тиймбилдинг', url: '#' },
		{ label: 'Ваучер', url: '#' },
		{ label: 'Цени', url: '#' },
		{ label: 'Резервирай', url: '#' },
		{ label: 'Контакти', url: '#' }
	],
	buttonText: 'резервирай сега!'
}

const html = template(data)

const headerContainer = document.getElementById('header-container')
headerContainer.innerHTML = html
