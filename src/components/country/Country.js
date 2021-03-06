import React from 'react';
import { PropTypes } from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Country = ({
  name, area, flag, lat, lng,
}) => (
  <div className="country-container">
    <div className="icons">
      <div className="stats">
        <img src={flag} alt={name} />
      </div>
      <Link to={`/details/${name}/${lat}/${lng}`}>
        <BsArrowRightCircle className="arrow" />
      </Link>
    </div>

    <div className="info">
      <h2>{name}</h2>
      <div className="population">
        <h2>
          {area}
          Km
        </h2>
      </div>
    </div>
  </div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};
export default Country;
