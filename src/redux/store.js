import { configureStore,   applyMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

// Create the temporary db / state / store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: [thunk],
  
});

export default store;