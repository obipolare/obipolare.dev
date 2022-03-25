import Layout from "../components/Layout/Layout"

const Home = () => {
  return (
    <>
      <Layout title="Home">
        <section className="flex items-center justify-center gap-[8px] lg:gap-[80px] w-10/12 mx-auto flex-wrap">
          <header className="font-bold text-[68px] sm:text-[98px] flex items-center flex-col flex-1 text-center">
            <p>Welcome here!, 🍀</p>
            <p>
              I'm <span className="text-[#E6CA98]">Obipolare</span>
            </p>
          </header>
          <figure className="py-[55px]">
            <img
              src="/assets/img/luck2.jpeg"
              alt=""
              className="w-[380px] rounded-lg shadow-lg"
            />
          </figure>
        </section>
        <figure className="mt-[80px] ">
          <img src="/assets/img/divide.png" />
        </figure>
        <section className="flex items-center justify-center mt-[80px]">
          <iframe
            // width="560"
            src="https://www.youtube.com/embed/EvWKuubUTko"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-[182px] sm:h-[388px] lg:h-[484px] w-full lg:w-[860px] rounded-lg shadow-lg "
          ></iframe>
        </section>
        <figure className="mt-[80px]">
          <img src="/assets/img/divide.png" />
        </figure>
        <section className="flex items-center justify-center w-10/12 mx-auto mt-[80px] flex-wrap gap-8 ">
          <header className="text-[64px] font-bold text-center">
            <h2>Never Give Up</h2>
          </header>
          <figure>
            <img src="/assets/img/neverGiveUp.png" alt="" />
          </figure>
        </section>
      </Layout>
    </>
  )
}

export default Home
