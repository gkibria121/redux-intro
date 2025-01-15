import { applyMiddleware, combineReducers, createStore } from "redux";
import { CustomerReducer } from "./features/Customer";
import { AccountReducer } from "./features/Account";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
// Combine reducers
const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

// Create store with devtools and middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Add middleware if needed
);

export default store;
