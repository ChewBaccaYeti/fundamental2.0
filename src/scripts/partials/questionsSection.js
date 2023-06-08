const toggle = (button) => {
	const toggleContent = button.parentNode.querySelector('.toggle-content')
	const vector = button.querySelector('.vector')

	toggleContent.classList.toggle('expanded')
	vector.classList.toggle('rotate')
}

const animateElement = (element) => {
	element.style.transition = 'opacity 0.3s ease'
	element.style.opacity = element.classList.contains('active') ? '1' : '0'
}

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

	button.addEventListener('click', () => {
		toggle(button)
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const questionsSection = `
    <section class="questions-section">
      <div class="questions-container">
        <div class="questions-text">
          <h6 class="questions-article">На място</h6>
          <p class="questions-paragraph">Усетете атмосфера</p>
        </div>

        <div class="questions-photos">
          <div class="grid gap-7">
            <img width="353" src="./images/group1.png" alt="Partyhard" />
            <img width="352" src="./images/cake-pic.png" alt="B-day cake" />
          </div>
          <div class="grid gap-7">
            <img width="353" src="./images/two-kids.png" alt="Boy and girl posing" />
            <img width="353" src="./images/group2.png" alt="Kids football club b-day" />
          </div>
          <div class="grid gap-7">
            <img width="352" src="./images/group3.png" alt="Kitchen" />
            <img width="353" src="./images/group4.png" alt="Boys smiling" />
          </div>
        </div>

        <div class="toggle-form_container">
          <div class="questions-text">
            <h6 class="questions-article">Често задавани въпроси</h6>
            <h3 class="questions-paragraph">Остана нещо неясно?</h3>
          </div>

          <div class="questions-puddles_container">
            <svg class="questions_purple" width="734.14px" height="1005.89px">
              <use href="./images/svg/sprite-devs.svg#icon-questions_purple"></use>
            </svg>
            <svg class="questions_green" width="894px" height="993px">
              <use href="./images/svg/sprite-devs.svg#icon-questions_green"></use>
            </svg>
          </div>

          <ul class="toggle-list">
            <li class="toggle-list_item w-1120 h-240 flex items-center justify-between rounded-lg border-2 border-zinc-300 bg-white p-8">
              <div class="toggle-content">
                <p class="toggle-paragraph">What are the services provided to customers?</p>
                <div class="toggle-paragraph_content">
                  <p class="toggle-text">
                    Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, and help customers market their products online through the marketplace.
                  </p>
                </div>
              </div>
              <button>
                <svg class="vector" width="12" height="7">
                  <use href="./images/svg/sprite-devs.svg#icon-Vector"></use>
                </svg>
              </button>
            </li>

            <li class="toggle-list_item w-1120 h-240 flex items-center justify-between rounded-lg border-2 border-zinc-300 bg-white p-8">
              <div class="toggle-content">
                <p class="toggle-paragraph">How can I submit a proposal for cooperation?</p>
                <div class="toggle-paragraph_content">
                  <p class="toggle-text">
                    Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, and help customers market their products online through the marketplace.
                  </p>
                </div>
              </div>
              <button>
                <svg class="vector" width="12" height="7">
                  <use href="./images/svg/sprite-devs.svg#icon-Vector"></use>
                </svg>
              </button>
            </li>

            <li class="toggle-list_item w-1120 h-240 flex items-center justify-between rounded-lg border-2 border-zinc-300 bg-white p-8">
              <div class="toggle-content">
                <p class="toggle-paragraph">I come from a faraway place, can collaboration be done full time online through several meeting applications?</p>
                <div class="toggle-paragraph_content">
                  <p class="toggle-text">
                    Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, and help customers market their products online through the marketplace.
                  </p>
                </div>
              </div>
              <button>
                <svg class="vector" width="12" height="7">
                  <use href="./images/svg/sprite-devs.svg#icon-Vector"></use>
                </svg>
              </button>
            </li>

            <li class="toggle-list_item w-1120 h-240 flex items-center justify-between rounded-lg border-2 border-zinc-300 bg-white p-8">
              <div class="toggle-content">
                <p class="toggle-paragraph">How do I get the payment complete?</p>
                <div class="toggle-paragraph_content">
                  <p class="toggle-text">
                    Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, and help customers market their products online through the marketplace.
                  </p>
                </div>
              </div>
              <button>
                <svg class="vector" width="12" height="7">
                  <use href="./images/svg/sprite-devs.svg#icon-Vector"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `

	const mainContent = document.querySelector('.main-content')
	mainContent.insertAdjacentHTML('beforeend', questionsSection)
})
