const index = () => {
  return (
    <>
      <main className="w-[90%] m-auto">
        <section class="main-section">
          <figure class="main-figure ">
            <img
              class="main-figure__img"
              src="/assets/img/luck2.jpeg"
              alt="Luck voltia"
            />
          </figure>
          <h1 class="main-username py-1">@obipolare 🍀</h1>
          <ul class="main-menu">
            {/* <li class="main-menu__item">
      <a class="main-menu__link main-menu__link--web" href="/#"
        >📰 Visita mi Sitio WEB</a
      >
    </li>  */}
            <li class="main-menu__item ">
              <a
                class="main-menu__link main-menu__link--youtube"
                target="_blank"
                href="https://www.youtube.com/channel/UCjBWKPHYM_azisD60cO87xA"
              >
                🔴 Youtube
              </a>
            </li>
            <li class="main-menu__item">
              <a
                class="main-menu__link main-menu__link--twitter"
                target="_blank"
                href="https://twitter.com/obipolare"
              >
                🐦 Twitter
              </a>
            </li>
            <li class="main-menu__item">
              <a
                class="main-menu__link main-menu__link--insta"
                target="_blank"
                href="https://www.instagram.com/obipolare/"
              >
                📸 Instagram
              </a>
            </li>
            <li class="main-menu__item">
              <a
                class="main-menu__link main-menu__link--twitch"
                target="_blank"
                href="https://www.twitch.tv/obipolare"
              >
                💜 Twitch
              </a>
            </li>
            <li class="main-menu__item">
              <a
                class="main-menu__link main-menu__link--github"
                target="_blank"
                href="https://github.com/obipolare"
              >
                🌑 Github
              </a>
            </li>
            <li class="main-menu__item">
              <a
                class="main-menu__link main-menu__link--telegram"
                target="_blank"
                href="https://t.me/Obipolare"
              >
                ☄️ Telegram
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="p-4 text-center">Developed By Obipolare © 2021</footer>
    </>
  );
};

export default index;
