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
