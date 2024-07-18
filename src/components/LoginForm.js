import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '@store/registrationSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ loginField, password }));
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-group">
          <label className="mb-1" htmlFor="loginField">Username or email address</label>
          <input
            type="text"
            className="form-control"
            id="loginField"
            value={loginField}
            onChange={(e) => setLoginField(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-group">
          <label className="mb-1" htmlFor="loginPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block w-100">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
