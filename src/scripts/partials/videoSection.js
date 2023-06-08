document.addEventListener('DOMContentLoaded', function () {
	const videoSection = `
  <section class="video-section relative">
  <div id="video-container"></div>
  <div class="video-container">
    <div class="video-text">
      <h6>Нашата атмосфера</h6>
      <h1>Вижте как се случва магията при нас</h1>
    </div>
    <div class="player">
      <iframe
        class="rounded-xl"
        id="vimeo-player"
        src="https://player.vimeo.com/video/236203659"
        width="1307px"
        height="650px"
        allowfullscreen
        allow="autoplay; encrypted-media"
      ></iframe>
      <script src="./src/scripts/utils/video.js" type="module"></script>
    </div>
    <div class="video-puddles_container relative">
      <svg class="ellipse" width="605px" height="176px">
        <use href="./src/images/svg/svg_folder/Ellipse.svg"></use>
      </svg>
      <svg class="video-yellow" width="1590px" height="1462px">
        <use href="./src/images/svg/sprite-devs.svg#icon-video_yellow"></use>
      </svg>
      <svg class="video-purple" width="896.51px" height="1069.38px">
        <use href="./src/images/svg/sprite-devs.svg#icon-video_purple"></use>
      </svg>
    </div>
  </div>
</section>
  `

	const videoContainer = document.getElementById('video-container')
	videoContainer.innerHTML = videoSection
})
