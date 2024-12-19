import { createContext } from "react";
const ProductContext = createContext("");
const SortContext = createContext("");
const FilterContext = createContext("");
const SearchContext = createContext("");
const CartContext = createContext("");
export {
  CartContext,
  FilterContext,
  ProductContext,
  SearchContext,
  SortContext,
};
