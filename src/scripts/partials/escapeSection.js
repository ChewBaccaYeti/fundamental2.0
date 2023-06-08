document.addEventListener('DOMContentLoaded', function () {
	const escapeSection = `
  <section class="escape-section">
    <div class="escape-container">
    <img
      class="escape-img"
      src="./src/images/ananieva_a_scene_where_van_gogh_is_smiling_and_happy_in_a_pixar_2068550e-8383-4f95-afc4-fcf60ad52b97 1.png"
      alt="Van Gogh with kids"
    />
    <div class="escape-info">
      <div class="escape-texts">
        <h1 class="escape-article">Ескейп стая</h1>
        <p class="escape-paragraph">
          Изберете един различен начин детето Ви да се забавлява с
          приятелите си. Нашият луд Гений Ви кани в ескейп стая “Лудостта на
          Гения“. Той ще отведе децата Ви в 19. век, когато е живял и ще ги
          потопи в света на изкуството.
        </p>
        <a href="#"
          ><button type="button" class="button">Резервирай сега!</button></a
        >
      </div>
      <ul class="escape-list">
        <li class="escape-list_item">
          <div class="escape-list_container">
            <svg width="32px" height="43px">
              <use
                href="./src/images/svg/sprite-devs.svg#icon-escape_hat"
              ></use>
            </svg>
            <h2>Парти Зала</h2>
            <p>От 1 да 6 часа</p>
          </div>
        </li>
        <li class="escape-list_item">
          <div class="escape-list_container">
            <svg width="44px" height="39px">
              <use
                href="./src/images/svg/sprite-devs.svg#icon-escape_people"
              ></use>
            </svg>
            <h2>2 - 30</h2>
            <p>Деца / Гости</p>
          </div>
        </li>
        <li class="escape-list_item">
          <div class="escape-list_container">
            <svg width="35px" height="43px">
              <use
                href="./src/images/svg/sprite-devs.svg#icon-escape_time"
              ></use>
            </svg>
            <h2>60</h2>
            <p>Минути / Игра</p>
          </div>
        </li>
        <li class="escape-list_item">
          <div class="escape-list_container">
            <svg width="47px" height="42px">
              <use
                href="./src/images/svg/sprite-devs.svg#icon-escape_fork"
              ></use>
            </svg>
            <h2>60</h2>
            <p>Минути / Игра</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
  `

	const escapeContainer = document.getElementById('escape-container')
	escapeContainer.innerHTML = escapeSection
})
