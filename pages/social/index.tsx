import Link from "next/link"
const Social = () => {
  return (
    <>
      <main className="w-[90%] m-auto">
        <section className="main-section">
          <figure className="main-figure ">
            <img
              className="main-figure__img"
              src="/assets/img/luck2.jpeg"
              alt="Luck voltia"
            />
          </figure>
          <h1 className="py-1 main-username">@obipolare 🍀</h1>
          <ul className="main-menu">
            <li className="main-menu__item">
              <Link href="/">
                <a className="main-menu__link main-menu__link--web">
                  📰 Visita mi Sitio WEB
                </a>
              </Link>
            </li>
            <li className="main-menu__item ">
              <a
                className="main-menu__link main-menu__link--youtube"
                target="_blank"
                href="https://www.youtube.com/channel/UCjBWKPHYM_azisD60cO87xA"
              >
                🔴 Youtube
              </a>
            </li>
            <li className="main-menu__item">
              <a
                className="main-menu__link main-menu__link--twitter"
                target="_blank"
                href="https://twitter.com/obipolare"
              >
                🐦 Twitter
              </a>
            </li>
            <li className="main-menu__item">
              <a
                className="main-menu__link main-menu__link--insta"
                target="_blank"
                href="https://www.instagram.com/obipolare/"
              >
                📸 Instagram
              </a>
            </li>
            <li className="main-menu__item">
              <a
                className="main-menu__link main-menu__link--twitch"
                target="_blank"
                href="https://www.twitch.tv/obipolare"
              >
                💜 Twitch
              </a>
            </li>
            <li className="main-menu__item">
              <a
                className="main-menu__link main-menu__link--github"
                target="_blank"
                href="https://github.com/obipolare"
              >
                🌑 Github
              </a>
            </li>
            <li className="main-menu__item">
              <a
                className="main-menu__link main-menu__link--telegram"
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
  )
}

export default Social
