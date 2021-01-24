import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import { shoeListReducer } from "./store/reducers/shoeReducer";
// debugger;
console.log("store.js");
const reducer = combineReducers({
  shoeList: shoeListReducer,
});

const middleWare = [thunk];
// allows me to return action creators instead of regular functions

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
