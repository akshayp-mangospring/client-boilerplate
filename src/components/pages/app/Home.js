import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getTodoLists } from "@store/todoListsSlice";
import TodoList from "@app_components/TodoList";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(getTodoLists());
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center">My Todos</h1>
      <TodoList />
    </>
  );
};

export default HomePage;
