const initialState = { name: "", nid: null };
const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "customer/create":
      return { ...state, name: action.payload.name, nid: action.payload.nid };
    default:
      return state;
  }
};

const create = (name, nid) => {
  return { type: "customer/create", payload: { name, nid } };
};

export { CustomerReducer, create };
