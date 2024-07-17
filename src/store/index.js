import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "@store/registrationSlice";
import todoListsSlice from "@store/todoListsSlice";

const store = configureStore({
  reducer: {
    currentUser: registrationSlice,
    todoLists: todoListsSlice,
  }
});

export default store;
