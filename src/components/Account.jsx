function Account() {
  return (
    <div className="account">
      <h1>👋Welcome, %NAME%</h1>
      <h1 className="title">Your account Operations</h1>

      <form action="">
        <div>
          <label htmlFor=" ">Deposit</label>
          <input type="text" name="" id="" />
          <select name="" id="">
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
            <option value="GBP">GBP</option>
          </select>
          <button>deposit</button>
        </div>
        <div>
          <label htmlFor="">Withdraw</label>
          <input type="text" name="" id="" />
          <button>Withdraw</button>
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
