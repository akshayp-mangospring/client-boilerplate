import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "@styles/App.sass";
import ProtectedRoute from '@components/common/ProtectedRoute';
import AppLayout from '@components/layouts/AppLayout';
import MarketingLayout from '@components/layouts/MarketingLayout';
import Registration from '@marketing_pages/Registration';
import AboutUs from '@marketing_pages/AboutUs';
import MarketingHome from '@marketing_pages/Home';
import Home from '@pages/Home';
import Profile from '@pages/Profile';

const App = () => {
  const isAuthenticated = useSelector((state) => state.currentUser?.auth_token);

  return (
    <Router>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/marketing-home" element={<MarketingHome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Registration />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/marketing-home" />} />
      </Routes>
    </Router>
  );
};

export default App;
