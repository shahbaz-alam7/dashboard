import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "redux/index";
import { setupListeners } from "@reduxjs/toolkit/query";
import { API } from "./api";
const store = configureStore({
  reducer: {
    global: globalReducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefault) => getDefault().concat(API.middleware),
});
setupListeners(store.dispatch);
export default store;
