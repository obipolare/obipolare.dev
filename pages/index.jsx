import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="flex items-center justify-center gap-[34px]">
        <header className="font-bold text-[88px] flex items-center flex-col flex-1">
          <p>Welcome Home!</p>
          <p>I'm Obipolare</p>
        </header>
        <figure className="py-[55px]">
          <img src="/assets/img/luck.png" alt="" />
        </figure>
      </section>
    </Layout>
  );
}
