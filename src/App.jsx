import "./App.css";
import Banner from "./components/Banner/Banner";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {
  FilterProvider,
  ProductProvider,
  SearchProvider,
  SortProvider,
} from "./provider";

function App() {
  return (
    <SearchProvider>
      <SortProvider>
        <FilterProvider>
          <ProductProvider>
            <>
              <Header />
              <Banner />
              <Body />
              <Footer />
            </>
          </ProductProvider>
        </FilterProvider>
      </SortProvider>
    </SearchProvider>
  );
}

export default App;
