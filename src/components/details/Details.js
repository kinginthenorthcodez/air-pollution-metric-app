import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { WiDaySunny } from 'weather-icons-react';
import ProgressBar from '@ramonak/react-progress-bar';
import { fetchPollutionData } from '../../redux/pollution/pollution';

const Details = () => {
  const dispatch = useDispatch();
  const pollutionDetails = useSelector((state) => state.airPollutionReducer);
  const { idCountry, lat, lng } = useParams();
  console.log('LATSLONG', lat, lng);
  console.log('POLUTIO DETAILS:', pollutionDetails);
  useEffect(() => {
    dispatch(fetchPollutionData(lat, lng));
  }, []);
  const { components, dt, aqi } = pollutionDetails;
  const date = new Date(dt * 1000);
  return (
    <section className="country-details">
      <ul className="details-ul">
        <li className="item name">
          <div className="icon">
            <WiDaySunny size={59} color="#e67e22" />
            <p className="date">{date.toLocaleDateString()}</p>
          </div>
          <div className="name-div">{idCountry}</div>
        </li>
        <li className="item details">
          <div className="details-div">Country&apos;s Details</div>
        </li>
        <li className="item details">
          <p className="details-div"> Air Quality Index</p>
        </li>
        <div className="progress-div">
          <ProgressBar
            completed={`${aqi}`}
            bgColor="#e67e22"
            maxCompleted={8}
            // customLabel="Not good"
          />
        </div>
        <li className="item details">
          <div className="details-div">Pollutant Components: ( µg/m3)</div>
        </li>
        <li className="item">
          <span className="left">Carbon Monoxide (CO): </span>
          <div className="right">{components.co}</div>
        </li>
        <li className="item">
          <span className="left">Ammonia (NH3): </span>
          <div className="right">{components.nh3}</div>
        </li>
        <li className="item">
          <span className="left">Nitrogen dioxide (NO2): </span>
          <div className="right">{components.no2}</div>
        </li>
        <li className="item">
          <span className="left">Nitrogen Monoxide (NO): </span>
          <div className="right">{components.no}</div>
        </li>
        <li className="item">
          <span className="left">Sulpher dioxide (SO2): </span>
          <div className="right">{components.so2}</div>
        </li>
        <li className="item">
          <span className="left">Ozone (O3): </span>
          <div className="right">{components.o3}</div>
        </li>
        <li className="item">
          <span className="left">Suspended Particles (Pm10): </span>
          <div className="right">{components.pm10}</div>
        </li>
        <li className="item">
          <span className="left">Suspended Particles (Pm2_5): </span>
          <div className="right">{components.pm2_5}</div>
        </li>
      </ul>
    </section>
  );
};

export default Details;
