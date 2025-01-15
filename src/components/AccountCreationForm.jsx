import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../features/Customer";

function AccountCreationForm() {
  const [name, setName] = useState("");
  const [nid, setNid] = useState("");
  const dispatch = useDispatch();

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!name || !nid) return;

    dispatch(create(name, nid));
    setName("");
    setNid("");
  };

  return (
    <div className="account-form">
      <h1 className="title">Create new customer</h1>

      <form action="" onSubmit={handleSubmission}>
        <div>
          <label htmlFor="name">Customer full name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nid}
            onChange={(e) => setNid(+e.target.value)}
            type="text"
            name="id"
            id=""
          />
        </div>
        <button>Create new customer</button>
      </form>
    </div>
  );
}

export default AccountCreationForm;
