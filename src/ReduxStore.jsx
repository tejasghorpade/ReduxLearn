import { useSelector, useDispatch } from "react-redux";
import { addMoney } from "./store";

export default function ReduxStore() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Name: {user.userName}</h1>
      <h2>Balance: ₹{user.balance}</h2>

      <button onClick={() => dispatch(addMoney(5000))}>
        Add ₹5000
      </button>
    </>
  );
}
