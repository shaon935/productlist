import "./App.css";
import Banner from "./components/Banner/Banner";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductProvider from "./provider/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <>
        <Header />
        <Banner />
        <Body />
        <Footer />
      </>
    </ProductProvider>
  );
}

export default App;
