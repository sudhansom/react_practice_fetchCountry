import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const storeFactory = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.subscribe(() => {
    const cart = store.getState().cart;
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  return store;
};

export default storeFactory;
