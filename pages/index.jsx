import Head from "next/head";
import Layout from "../components/Layout/Layout";


const Home = () => {

  return (
    <>
      <Layout>
        <section className="flex items-center justify-center gap-[8px] lg:gap-[80px] w-10/12 mx-auto flex-wrap">
          <header className="font-bold text-[64px] sm:text-[88px] flex items-center flex-col flex-1 text-center">
            <p>Welcome Home!</p>
            <p>I'm Obipolare</p>
          </header>
          <figure className="py-[55px]">
            <img src="/assets/img/luck2.jpg" alt="" />
          </figure>
        </section>
        <figure className="mt-[80px] ">
          <img src="/assets/img/divide.png"  />
        </figure>
        <section className="flex items-center justify-center w-10/12 mx-auto mt-[80px]">
          <iframe
            width="860"
            height="484"
            src="https://www.youtube.com/embed/EvWKuubUTko"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
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
  );
};

export default Home;
