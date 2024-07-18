import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from 'react-router-dom';
import { logout } from "@store/registrationSlice";

const AppNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    navigate('/marketing-home');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
      <div className="container-fluid">
        <NavLink to="/home" className="navbar-brand">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                aria-current="page"
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" onClick={logoutUser}>
              <button className="nav-link btn btn-link">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNav;
