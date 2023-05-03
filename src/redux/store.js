import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./slices/messagesSlice";
import usersReducer from "./slices/usersSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
        users: usersReducer,
        theme: themeReducer,
    },
});