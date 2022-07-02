import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from '../country/Country';
import { fetchCountries } from '../../redux/countries/countries';

const Home = () => {
  const [search, setSearch] = useState('Africa');
  const dispatch = useDispatch();
  const regionCountries = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    dispatch(fetchCountries(search.toLowerCase()));
  }, [search]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    e.target.value = '';
  };

  return (
    <section className="region-container">
      <div className="item">
        <div className="header">
          <h2>Map region</h2>
          <div className="title">
            <h1>{search}</h1>
          </div>
        </div>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search your favorite region..."
          className="input"
        />
        <div className="section">
          {regionCountries.map((country) => (
            <Country
              key={country.name}
              name={country.name}
              area={country.area}
              flag={country.flag}
            />
            /// / .filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
