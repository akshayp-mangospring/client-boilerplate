import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "@store/registrationSlice";
import { getTodoLists } from "@store/todoListsSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await dispatch(getTodoLists());
    }

    fetchData();
  }, [dispatch]);

  const logoutUser = () => {
    dispatch(logout());
    navigate('/login');
  }

  return (
    <>
      <h1 className="text-center">My Todos</h1>
      <button type="button" className="btn btn-primary btn-block" onClick={logoutUser}>
        Logout
      </button>
    </>
  );
};

export default HomePage;
