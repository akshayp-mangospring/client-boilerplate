import React from 'react';
import { Outlet } from 'react-router-dom';
import MarketingNav from '@components/common/MarketingNav';

const MarketingLayout = () => {
  return (
    <>
      <MarketingNav />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default MarketingLayout;
