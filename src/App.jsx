import { useSelector, useDispatch } from "react-redux";
import { addMoney, removeMoney } from "./store";

export default function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Name: {user.userName}</h1>
      <h2>AccountNo: {user.AccountNo}</h2>
      <h2>Balance: ₹{user.balance}</h2>

      <button onClick={() => dispatch(addMoney(5000))}>
        Add ₹5000
      </button>

      <button onClick={() => dispatch(removeMoney(5000))}>
        Remove ₹5000
      </button>
    </>
  );
}
