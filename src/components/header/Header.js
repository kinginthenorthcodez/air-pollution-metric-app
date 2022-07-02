import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BsMicFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <header>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="back-btn">
            <Link to="/">
              <IoIosArrowBack />
            </Link>
          </li>
          <li className="logo">
            <Link to="/" className="logo">
              <h1 className="title">Air pollution Metrics</h1>
            </Link>
          </li>
          <li className="icons">
            <button type="button" className="btn">
              <BsMicFill />
            </button>
            <button type="button" className="btn">
              <AiTwotoneSetting />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
