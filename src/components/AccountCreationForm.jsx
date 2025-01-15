function AccountCreationForm() {
  return (
    <div className="account-form">
      <h1 className="title">Create new customer</h1>

      <form action="">
        <div>
          <label htmlFor="name">Customer full name</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <lable>National ID</lable>
          <input type="text" name="id" id="" />
        </div>
        <button>Create new customer</button>
      </form>
    </div>
  );
}

export default AccountCreationForm;
