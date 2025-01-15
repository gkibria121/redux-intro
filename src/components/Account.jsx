import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../features/Account";

function Account() {
  const dispatch = useDispatch();

  const { name } = useSelector((store) => store.customer);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleWithdraw = () => {
    dispatch(withdraw(withdrawAmount));
  };

  const handleDeposit = () => {
    dispatch(deposit(depositAmount));
    setDepositAmount(0);
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
          <select name="" id="">
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
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
          <input type="text" name="" id="" placeholder="Loan amount" />
          <input type="text" name="" id="" placeholder="Loan purpose" />
          <button>Request loan</button>
        </div>
        <div>
          <label htmlFor="">Pay back 1X</label>
          <button>Pay Loan</button>
        </div>
      </form>
    </div>
  );
}

export default Account;
