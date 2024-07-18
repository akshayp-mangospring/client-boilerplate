import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProtectedRoute from '@components/ProtectedRoute';
import Registration from '@pages/Registration';
import Home from '@pages/Home';
import Profile from '@pages/Profile';

const App = () => {
  const isAuthenticated = useSelector((state) => state.currentUser?.auth_token);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Registration />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
