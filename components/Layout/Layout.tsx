import Head from "next/head"
import { ReactNode } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

type Props = {
  children: ReactNode
  title: string
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="/assets/svg/clover.svg"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
