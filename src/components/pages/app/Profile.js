import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@store/registrationSlice';

const ProfilePage = () => {
  const {username, email} = useSelector(selectCurrentUser);

  return (
    <>
      <h1 className="text-center mb-5">My Profile</h1>
      <ul className="list-unstyled">
        <li className="d-flex mb-2">
          <span className="fw-bold">Username:</span>
          <span className="ms-2">{username}</span>
        </li>
        <li className="d-flex mb-2">
          <span className="fw-bold">Email:</span>
          <span className="ms-2">{email}</span>
        </li>
      </ul>
    </>
  );
};

export default ProfilePage;
