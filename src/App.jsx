import Header from "./components/Header";
import AccountCreationForm from "./components/AccountCreationForm";
import Account from "./components/Account";
import { useSelector } from "react-redux";

function App() {
  const customerName = useSelector((store) => store.customer.name);
  return (
    <>
      <Header />
      {!customerName ? <AccountCreationForm /> : <Account />}
    </>
  );
}

export default App;
