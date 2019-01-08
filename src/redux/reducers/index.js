import { combineReducers } from "redux";
import userInfo from "./userInfo";
import audioStatus from "./audio";
import enemyInfo from "./enemyInfo";
import listOfAllUsers from "./listOfUsers";

const rootReducer = combineReducers({
  userInfo,
  enemyInfo,
  audioStatus,
  listOfAllUsers
});

export default rootReducer;
