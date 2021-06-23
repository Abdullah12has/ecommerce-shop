const initState = {
  user: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
