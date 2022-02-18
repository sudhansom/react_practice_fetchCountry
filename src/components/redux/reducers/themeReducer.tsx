import { AllActions } from "../action";

export type DefaultState = {
  theme: "light" | "dark";
};
const defaultState: DefaultState = {
  theme: "light",
};

const themeReducer = (
  state = defaultState,
  action: AllActions
): DefaultState => {
  switch (action.type) {
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
