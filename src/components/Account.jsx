import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "../features/Account";

function Account() {
  const dispatch = useDispatch();

  const { name } = useSelector((store) => store.customer);
  const { loan } = useSelector((store) => store.account);
  const [depositAmount, setDepositAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanReason, setLoanReason] = useState("");

  const handleWithdraw = () => {
    dispatch(withdraw(withdrawAmount));
    setWithdrawAmount(0);
  };
  const handleLoan = () => {
    dispatch(requestLoan(loanAmount, loanReason));
    setLoanAmount("");
    setLoanReason("");
  };
  const handleDeposit = () => {
    dispatch(deposit({ amount: depositAmount, currency }));
    setDepositAmount(0);
    setCurrency("USD");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };
  return (
    <div className="account">
      <h1>👋Welcome, {name}</h1>
      <h1 className="title">Your account Operations</h1>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor=" ">Deposit</label>
          <input
            type="text"
            name=""
            id=""
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select name="" id="" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
          </select>
          <button onClick={handleDeposit}>deposit</button>
        </div>
        <div>
          <label htmlFor="">Withdraw</label>
          <input
            type="text"
            name=""
            id=""
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(+e.target.value)}
          />
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
        <div>
          <label htmlFor="">Request loan</label>
          <input
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Loan amount"
          />
          <input
            value={loanReason}
            onChange={(e) => setLoanReason(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Loan purpose"
          />
          <button onClick={handleLoan}>Request loan</button>
        </div>
        <div>
          <label htmlFor="">Pay back ${loan}</label>
          <button onClick={handlePayLoan}>Pay Loan</button>
        </div>
      </form>
    </div>
  );
}

export default Account;
