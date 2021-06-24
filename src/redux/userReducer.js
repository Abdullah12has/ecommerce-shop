const INIT_STATE = {
  cuser: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        cuser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
