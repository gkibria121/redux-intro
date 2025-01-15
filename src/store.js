import { CustomerReducer } from "./features/Customer";
import AccountReducer from "./features/Account";
import { configureStore } from "@reduxjs/toolkit";

// Create store with devtools and middleware
const store = configureStore({
  reducer: {
    account: AccountReducer,
    customer: CustomerReducer,
  },
});

export default store;
