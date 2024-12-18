import { useState } from "react";
import { SearchContext } from "../context";

const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
