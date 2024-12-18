import Products from "./Products";
import SortSearchFilter from "./SortSearchFilter";
import Title from "./Title";

export default function Body() {
  return (
    <div className="pt-16 sm:pt-24 lg:pt-40">
      <Title />
      <div>
        <SortSearchFilter />
        <Products />
      </div>
    </div>
  );
}
