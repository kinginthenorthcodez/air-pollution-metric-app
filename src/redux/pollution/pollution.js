// reducer
const initialState = {
  components: {
    co: 201.94,
    nh3: 0.1,
    no: 0.01,
    no2: 0.07,
    o3: 36.12,
    pm2_5: 0.5,
    pm10: 0.74,
    so2: 0.25,
  },
  aqi: 1,
  dt: 1656748800,
};
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
  dispatch(fetchPollution(structData));
};

export default airPollutionReducer;
