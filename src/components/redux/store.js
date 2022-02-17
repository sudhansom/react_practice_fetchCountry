import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import countryReducer from "./reducer";

//const storeFactory = () => {
const store = createStore(
  countryReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
//   return store
//}

export default store;
