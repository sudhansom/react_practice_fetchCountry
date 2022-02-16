import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import countryReducer from "./reducer";

//const storeFactory = () => {
const store = createStore(countryReducer, composeWithDevTools());
//   return store
//}

export default store;
