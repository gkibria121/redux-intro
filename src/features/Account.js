const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      if (state.balance < action.payload) return state;
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      if (state.balance < state.loan) return state;
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
};
const deposit = (amount, currency) => {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  return async (dispatch) => {
    const response = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currency}`
    );
    if (!response.ok) return;
    const { rates } = await response.json();
    dispatch({ type: "account/deposit", payload: amount * rates[currency] });
  };
};
const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};
const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};
const payLoan = () => {
  return { type: "account/payLoan" };
};

export { AccountReducer, deposit, withdraw, requestLoan, payLoan };
