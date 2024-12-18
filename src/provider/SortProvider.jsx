import { useState } from "react";
import { SortContext } from "../context";

const SortProvider = ({ children }) => {
  const [sortOrder, setSortOrder] = useState(""); // "" means no sort, "low-to-high", "high-to-low"
  return (
    <SortContext.Provider value={{ sortOrder, setSortOrder }}>
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;
