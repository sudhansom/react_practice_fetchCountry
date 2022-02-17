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

const getAllCountries = () => {
  return async (dispatch, getState) => {
    try {
      const result = await fetch("https://restcountries.com/v2/all");
      const countryList = await result.json();
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
