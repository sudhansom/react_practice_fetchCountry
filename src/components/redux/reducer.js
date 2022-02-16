const defaultState = {
  cart: [],
};

const countryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INSERT_COUNTRY":
      const incommingCountry = action.payload.name;
      const ifExists = state.cart.find(
        (country) => country.name === incommingCountry
      );
      if (ifExists) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case "REMOVE_COUNTRY":
      const countryName = action.payload;
      const filteredCountries = state.cart.filter(
        (country) => country.name !== countryName
      );
      return {
        ...state,
        cart: [...filteredCountries],
      };

    default:
      return state;
  }
};

export default countryReducer;
