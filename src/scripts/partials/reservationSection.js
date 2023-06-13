document.addEventListener('DOMContentLoaded', function () {
	const reservationSection = `
  <section class="reservation-section">
  <div class="reservation-text">
    <h2 class="reservation-article">Направи резервация</h2>
    <div class="reservation-dates">
      <button type="button" class="dates_left">
        <svg width="32px" height="32px">
          <use
            href="./src/images/svg/sprite-devs.svg#icon-ArrowCircleLeft"
          ></use>
        </svg>
      </button>
      <time class="reservation-paragraph">03.04.2023 — 09.04.2023</time>
      <button type="button" class="dates_right">
        <svg width="32px" height="32px">
          <use
            href="./src/images/svg/sprite-devs.svg#icon-ArrowCircleRight"
          ></use>
        </svg>
      </button>
    </div>
  </div>

  <div class="reservation-container">
    <div class="reservation-days">
      <div class="day">
        <svg width="24px" height="22px">
          <use href="./src/images/svg/sprite-devs.svg#icon-fi_calendar"></use>
        </svg>
        03.04.2023
        <br />
        Понеделник
      </div>
      <div class="day">
        <svg width="24px" height="22px">
          <use href="./src/images/svg/sprite-devs.svg#icon-fi_calendar"></use>
        </svg>
        04.04.2023
        <br />
        Вторник
      </div>
      <div class="day">
        <svg width="24px" height="22px">
          <use href="./src/images/svg/sprite-devs.svg#icon-fi_calendar"></use>
        </svg>
        05.04.2023
        <br />
        Сряда
      </div>
      <div class="day">
        <svg width="24px" height="22px">
          <use href="./src/images/svg/sprite-devs.svg#icon-fi_calendar"></use>
        </svg>
        06.04.2023
        <br />
        Четвъртък
      </div>
      <div class="day">
        <svg width="24px" height="22px">
          <use href="./src/images/svg/sprite-devs.svg#icon-fi_calendar"></use>
        </svg>
        07.04.2023
        <br />
        Петък
      </div>
      <div class="day">
        <svg width="24px" height="22px">
          <use href="./src/images/svg/sprite-devs.svg#icon-fi_calendar"></use>
        </svg>
        08.04.2023
        <br />
        Събота
      </div>
      <div class="day">
        <svg width="24px" height="22px">
          <use href="./src/images/svg/sprite-devs.svg#icon-fi_calendar"></use>
        </svg>
        09.04.2023
        <br />
        Неделя
      </div>
    </div>
    <div class="reservation">
      <ul class="time-list">
        <li class="time"><p class="clock">10:00</p></li>
        <li class="time"><p class="clock">12:00</p></li>
        <li class="time"><p class="clock">14:00</p></li>
        <li class="time"><p class="clock">16:00</p></li>
        <li class="time"><p class="clock">18:00</p></li>
        <li class="time"><p class="clock">20:00</p></li>
        <li class="time"><p class="clock">22:00</p></li>
      </ul>
    </div>
    <div class="reservation">
      <ul class="time-list">
        <li class="time"><p class="clock">10:00</p></li>
        <li class="time"><p class="clock">12:00</p></li>
        <li class="time"><p class="clock">14:00</p></li>
        <li class="time"><p class="clock">16:00</p></li>
        <li class="time"><p class="clock">18:00</p></li>
        <li class="time"><p class="clock">20:00</p></li>
        <li class="time"><p class="clock">22:00</p></li>
      </ul>
    </div>
    <div class="reservation">
      <ul class="time-list">
        <li class="time"><p class="clock">10:00</p></li>
        <li class="time"><p class="clock">12:00</p></li>
        <li class="time"><p class="clock">14:00</p></li>
        <li class="time"><p class="clock">16:00</p></li>
        <li class="time"><p class="clock">18:00</p></li>
        <li class="time"><p class="clock">20:00</p></li>
        <li class="time"><p class="clock">22:00</p></li>
      </ul>
    </div>
    <div class="reservation">
      <ul class="time-list">
        <li class="time"><p class="clock">10:00</p></li>
        <li class="time"><p class="clock">12:00</p></li>
        <li class="time"><p class="clock">14:00</p></li>
        <li class="time"><p class="clock">16:00</p></li>
        <li class="time"><p class="clock">18:00</p></li>
        <li class="time"><p class="clock">20:00</p></li>
        <li class="time"><p class="clock">22:00</p></li>
      </ul>
    </div>
    <div class="reservation">
      <ul class="time-list">
        <li class="time"><p class="clock">10:00</p></li>
        <li class="time"><p class="clock">12:00</p></li>
        <li class="time"><p class="clock">14:00</p></li>
        <li class="time"><p class="clock">16:00</p></li>
        <li class="time"><p class="clock">18:00</p></li>
        <li class="time"><p class="clock">20:00</p></li>
        <li class="time"><p class="clock">22:00</p></li>
      </ul>
    </div>
    <div class="reservation">
      <ul class="time-list">
        <li class="time"><p class="clock">10:00</p></li>
        <li class="time"><p class="clock">12:00</p></li>
        <li class="time"><p class="clock">14:00</p></li>
        <li class="time"><p class="clock">16:00</p></li>
        <li class="time"><p class="clock">18:00</p></li>
        <li class="time"><p class="clock">20:00</p></li>
        <li class="time"><p class="clock">22:00</p></li>
      </ul>
    </div>
    <div class="reservation">
      <ul class="time-list">
        <li class="time"><p class="clock">10:00</p></li>
        <li class="time"><p class="clock">12:00</p></li>
        <li class="time"><p class="clock">14:00</p></li>
        <li class="time"><p class="clock">16:00</p></li>
        <li class="time"><p class="clock">18:00</p></li>
        <li class="time"><p class="clock">20:00</p></li>
        <li class="time"><p class="clock">22:00</p></li>
      </ul>
    </div>
  </div>

  <div class="info-container">
    <form class="info-form">
      <div class="column-container">
        <div class="info-column_container">
          <ul class="info-list">
            <li class="info-list_item">
              <p class="info-list_paragraph">Електронна поща</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Електронна поща"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Име</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Име"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Телефонен номер</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Телефонен номер"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Име на рожденика</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Име на рожденика"
                  type="text"
                  name="input"
                />
              </label>
            </li>
          </ul>
        </div>

        <div class="info-column_container">
          <ul class="info-list">
            <li class="info-list_item">
              <p class="info-list_paragraph">Възраст, която навърша</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Възраст, която навърша"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Брой играчи</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Брой играчи"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Език на играта</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Език на играта"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <label>
                <p class="info-list_paragraph">Деца до 14 години</p>
                <input
                  class="info-input"
                  placeholder="Деца до 14 години"
                  type="text"
                  name="input"
                />
              </label>
            </li>
          </ul>
        </div>

        <div class="info-column_container">
          <ul class="info-list">
            <li class="info-list_item">
              <p class="info-list_paragraph">Наем на дъполнителна стая</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Наем на дъполнителна стая"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Наем на залата за:</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Залата"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Кетъринг</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Кетъринг"
                  type="text"
                  name="input"
                />
              </label>
            </li>

            <li class="info-list_item">
              <p class="info-list_paragraph">Аниматор</p>
              <label>
                <input
                  class="info-input"
                  placeholder="Аниматор"
                  type="text"
                  name="input"
                />
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div class="solo-input_container">
        <label
          ><p>Код з</p>а отстъпка</p>
          <input
            class="solo-input"
            placeholder="Код за отстъпка"
            type="text"
            name="input"
          />
        </label>
        <label
          ><p>Забел</p>ежки и въпроси</p>
          <input
            class="solo-input"
            placeholder="Забележки и въпроси "
            type="text"
            name="input"
          />
        </label>
      </div>

      <ul class="checkboxes-list">
        <li class="checkboxes-item">
          <label>
            <input
              class="checkbox w-522"
              type="checkbox"
              name="form-checkbox"
              value="General settings"
            />
            <p>Проче</p>тох и се запознах с общите условия за ползване.</p>
          </label>
        </li>

        <li class="checkboxes-item">
          <label>
            <input
              class="checkbox w-627"
              type="checkbox"
              name="form-checkbox"
              value="Data"
            />
            <p>
    </p>          Съгласен съм данните ми да бъдат използвани за маркетингови
              цели.
            </p>
          </label>
        </li>

        <li class="checkboxes-item">
          <label>
            <input
              class="checkbox w-627"
              type="checkbox"
              name="form-checkbox"
              value="PI security"
            /><a
              href="https://www.questhouse.bg/prava-za-zashtita-na-lichnite-danni"
              >Запознат съм с правата за защита на личните данни.</a
            >
          </label>
        </li>
      </ul>
    </form>
    <div class="preFooter-container">
      <a href="#"
        ><button type="button" class="button footer-btn">
          Запази своя час
        </button></a
      >
    </div>
  </div>
</section>
  `

	const reservationContainer = document.getElementById('reservation-container')
	reservationContainer.innerHTML = reservationSection
})
