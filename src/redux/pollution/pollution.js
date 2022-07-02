// reducer
const initialState = {};
const airPollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AIR_OK':
      return action.payload;
    default:
      return state;
  }
};

// actions

export const fetchPollution = (structData) => ({
  type: 'FETCH_AIR_OK',
  payload: structData,
});

// thunk
export const fetchPollutionData = (lat, lng) => async (dispatch) => {
  const URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=9fcb5039d491d0d6f3f65fea85930ea8`;
  const response = await fetch(URL);
  const data = await response.json();
  const { components, main, dt } = data.list[0];
  const structData = {
    components,
    aqi: main.aqi,
    dt,
  };
  console.log('Air Pollutes: ', structData);
  dispatch(fetchPollution(structData));
};

export default airPollutionReducer;
