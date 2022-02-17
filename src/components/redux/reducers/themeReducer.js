const defaultState = {
  theme: "light",
};

const themeReducer = (state = defaultState, action) => {
  switch (action.payload) {
    case "LIGHT":
      return {
        ...state,
        theme: "light",
      };
    case "DARK":
      return {
        ...state,
        theme: "dark",
      };

    default:
      return state;
  }
};

export default themeReducer;
