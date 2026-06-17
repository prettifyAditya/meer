import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import MenuModal from "../organisms/MenuModal";

export default function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <MenuModal />
      <Footer />
    </>
  );
}
