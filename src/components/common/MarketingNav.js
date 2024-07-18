import React from 'react';
import { NavLink } from 'react-router-dom';

const MarketingNav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
      <div className="container-fluid">
        <NavLink to="/marketing-home" className="navbar-brand">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                aria-current="page"
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                aria-current="page"
              >
                Account
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MarketingNav;
