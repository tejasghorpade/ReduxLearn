import { createStore } from "redux";

// Initial State
const initialState = {
  user: {
    userName: "Tejas",
    balance: 25000,
  },
};

// Action Creator
export const addMoney = (amt) => ({
  type: "ADD_MONEY",
  payload: amt,
});

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MONEY":
      return {
        user: {
          userName: state.user.userName,
          balance: state.user.balance + action.payload,
        },
      };

    default: 
      return state;
  }
}

// Store
const store = createStore(reducer);

export default store;
