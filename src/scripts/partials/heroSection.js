document.addEventListener('DOMContentLoaded', function () {
	const heroSection = `
      <section class="hero-section">
          <div class="hero-container">
              <div class="hero-images">
                  <svg class="purplePuddle">
                      <use href="./src/images/svg/sprite-devs.svg#icon-purplePuddle_svg"></use>
                  </svg>
                  <svg class="yellowPuddle">
                      <use href="./src/images/svg/sprite-devs.svg#icon-yellowPuddle_svg"></use>
                  </svg>
                  <img class="hero-photo" src="./src/images/heroes_photo.png" alt="Kids with cake" />
                  <svg class="arrow-group">
                      <use href="./src/images/svg/sprite-devs.svg#icon-arrowGroup_svg"></use>
                  </svg>
              </div>
              <div class="hero_-nfo">
                  <div class="hero-text">
                      <h1 class="hero-text_article">Подари един Незабравим рожден ден</h1>
                      <p class="hero-text_paragraph">Искате да отпразнувате незабравим рожден ден на детето Ви? Искате да му подарите незабравими емоции? Изберете един различен начин детето Ви да се забавлява с приятелите си.</p>
                      <a href="#"><button type="button" class="button">Резервирай сега!</button></a>
                  </div>
                  <div class="numbers">
                      <ul class="numbers-list_number">
                          <li class="numbers-list_number_item text-orange-500">212+</li>
                          <li class="numbers-list_number_item text-violet-500">100+</li>
                          <li class="numbers-list_number_item text-green-500">12+</li>
                      </ul>
                      <ul class="numbers-list_text">
                          <li class="numbers-list_text_item">рождени дни</li>
                          <li class="numbers-list_text_item">доволни рожденници</li>
                          <li class="numbers-list_text_item">локации</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  `

	const heroContainer = document.getElementById('hero-container')
	heroContainer.innerHTML = heroSection
})
