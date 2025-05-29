// components/Users/UserPortal.jsx
import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom'; 

const UserPortal = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default UserPortal;
