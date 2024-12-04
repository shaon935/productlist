import Products from "./Products";
import SearchFilter from "./SearchFilter";
import Title from "./Title";

export default function Body() {
  return (
    <div className="pt-16 sm:pt-24 lg:pt-40">
      <Title />
      <div>
        <SearchFilter />
        <Products />
      </div>
    </div>
  );
}
