import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signup } from "@store/registrationSlice";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(signup({ username, email, password }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 form-group">
        <label className="mb-1" htmlFor="signupUsername">Username</label>
        <input
          type="text"
          className="form-control"
          id="signupUsername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 form-group">
        <label className="mb-1" htmlFor="signupEmail">Email</label>
        <input
          type="email"
          className="form-control"
          id="signupEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 form-group">
        <label className="mb-1" htmlFor="signupPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="signupPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block w-100">
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
