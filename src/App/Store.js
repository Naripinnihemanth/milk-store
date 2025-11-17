import { configureStore as config } from "@reduxjs/toolkit";
import milkReducer from "../Features/milk/MilkBottles";
import curdReducer from "../Features/curd/CurdPackets";
import userReducer from "../Features/users/Users";
// const reduxLogger = require("redux-logger").createLogger;
// const logger = reduxLogger();
const store = config({
  reducer: {
    milk: milkReducer,
    curd: curdReducer,
    user: userReducer,
  },
  //   middleware: (Default) => Default().concat(logger),
});

export default store;
