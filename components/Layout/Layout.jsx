import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-10/12 mx-auto ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
