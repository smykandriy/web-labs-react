import {configureStore} from "@reduxjs/toolkit";
// import cartReducer from "../components/common/HelicopterDetailsModal/HelicopterDetails.slice"
import rootReducer from "./rootReducer";


export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
