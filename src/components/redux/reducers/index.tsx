import { combineReducers } from "redux";

import countryReducer from "./countryReducer";
import themeReducer from "./themeReducer";
import { Country } from "../types";
import { DefaultState as CountryReducerType } from "./countryReducer";
import { DefaultState as ThemeReducerType } from "./themeReducer";

const rootReducer = combineReducers({
  countryReducer,
  themeReducer,
});
type PreloadedState = {
  countryReducer: CountryReducerType;
  themeReducer: ThemeReducerType;
};

export const preloadedState: PreloadedState = {
  countryReducer: {
    cart: localStorage.getItem("cart")
      ? (JSON.parse(localStorage.getItem("cart") as string) as Country[])
      : [],
    countries: localStorage.getItem("countries")
      ? (JSON.parse(localStorage.getItem("countries") as string) as Country[])
      : [],
    err: "something went wrong",
    country: null,
  },
  themeReducer: {
    theme: localStorage.getItem("theme")
      ? (localStorage.getItem("theme") as "light" | "dark")
      : ("light" as "light"),
  },
};

export type Store = ReturnType<typeof rootReducer>;

export default rootReducer;
