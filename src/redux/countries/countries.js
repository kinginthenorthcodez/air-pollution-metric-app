// initial state
const initialState = [];

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_OK':
      return [...action.payload];
    default:
      return state;
  }
};

// actions

export const fetchOk = (payload) => ({
  type: 'FETCH_OK',
  payload,
});

// grab data from api
export const getAPIData = async (region) => {
  const URL = `https://restcountries.com/v3.1/region/${region}?fields=name,latlng,area,flags`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
// Thunk
export const fetchCountries = (region) => async (dispatch) => {
  const data = await getAPIData(region);
  // const data = response.json();
  const dataFieds = data.map(({
    flags, latlng, area, name,
  }) => ({
    flag: flags.svg,
    area,
    lat: latlng[0],
    lng: latlng[1],
    name: name.common,
  }));
  console.log('COUNTRIES', data);
  console.log('COUNTRIES STRUCT', dataFieds);
  dispatch(fetchOk(dataFieds));
};

export default countriesReducer;
