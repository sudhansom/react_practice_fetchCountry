const defaultState = {
  theme: "light",
};

const themeReducer = (state, action) => {
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
