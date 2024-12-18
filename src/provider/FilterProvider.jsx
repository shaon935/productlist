import { useState } from "react";
import { FilterContext } from "../context";

const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <FilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
