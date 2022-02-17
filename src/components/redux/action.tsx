// insert country to cart if does not exist
export const insertCountry = (country) => {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
};
// remove country from cart
export const removeCountry = (countryName) => {
  return {
    type: "REMOVE_COUNTRY",
    payload: countryName,
  };
};
export const getOneCountry = (countryName) => {
  return async (dispatch, getState) => {
    try {
      const result = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await result.json();
      dispatch(oneCountrySuccess(data[0]));
    } catch (err) {
      dispatch(onFetchFail(err));
    }
  };
};

const oneCountrySuccess = (country) => {
  return {
    type: "SUCCESS_ONE_COUNTRY",
    payload: country,
  };
};

export const getAllCountries = () => {
  return async (dispatch, getState) => {
    try {
      const result = await fetch("https://restcountries.com/v2/all");
      const countryList = await result.json();
      console.log("inside thunk Countries:", countryList);
      dispatch(allCountriesSuccess(countryList));
    } catch (err) {
      dispatch(onFetchFail(err));
    }
  };
};

const allCountriesSuccess = (countryList) => {
  return {
    type: "SUCCESS_ALL_COUNTRIES",
    payload: countryList,
  };
};

const onFetchFail = (err) => {
  return {
    type: "FETCH_FAIL",
    payload: err,
  };
};

export const setLightTheme = () => {
  return {
    type: "LIGHT",
  };
};

export const setDarkTheme = () => {
  return {
    type: "DARK",
  };
};
