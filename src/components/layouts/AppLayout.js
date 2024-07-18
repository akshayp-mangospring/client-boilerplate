import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNav from '@components/common/AppNav';

const AppLayout = () => {
  return (
    <>
      <AppNav />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
