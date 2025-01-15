import { useSelector } from "react-redux";

function Header() {
  const balance = useSelector((store) => store.account.balance);
  const formatedNumber = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    balance
  );
  return (
    <div className="header">
      <h1>🏦The React-Redux Bank⚛️</h1>
      <div className="balance">{formatedNumber}</div>
    </div>
  );
}

export default Header;
