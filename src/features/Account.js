import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// const AccountReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       if (state.balance < action.payload) return state;
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         balance: state.balance + action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       if (state.balance < state.loan) return state;
//       return {
//         ...state,
//         loan: 0,
//         balance: state.balance - state.loan,
//         loanPurpose: "",
//       };
//     default:
//       return state;
//   }
// };

const AccountReducer = createSlice({
  name: "account",
  initialState: initialState,

  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.balance = state.balance + action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      },
    },
    payLoan(state) {
      if (state.balance < state.loan) return;
      state.loan = 0;
      state.balance = state.balance - state.loan;
      state.loanPurpose = "";
    },
  },
});

const deposit = (amount, currency) => {
  if (String(currency).toLocaleLowerCase() === "usd") {
    return { type: "account/deposit", payload: amount };
  }

  return async (dispatch) => {
    const response = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currency}`
    );
    if (!response.ok) return;
    const { rates } = await response.json();
    dispatch({ type: "account/deposit", payload: amount / rates[currency] });
  };
};

export default AccountReducer.reducer;
export { deposit };
export const { payLoan, requestLoan, withdraw } = AccountReducer.actions;
