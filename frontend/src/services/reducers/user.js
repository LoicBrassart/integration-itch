const initialState = {
  name: null,
  email: null,
  avatar: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGOUT":
      return initialState;

    case "USER_LOGIN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
