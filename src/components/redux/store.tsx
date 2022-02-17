import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const storeFactory = () => {
  const middleware = [thunk];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  store.subscribe(() => {
    const cart = store.getState().countryReducer.cart;
    const countries = store.getState().countryReducer.countries;
    const theme = store.getState().themeReducer.theme;
    const err = store.getState().countryReducer.err;
    const country = store.getState().countryReducer.country;
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("countries", JSON.stringify(countries));
    localStorage.setItem("country", JSON.stringify(country));
    localStorage.setItem("theme", theme);
    localStorage.setItem("err", JSON.stringify(err));
  });
  return store;
};

export default storeFactory;
