import { combineReducers } from "redux";
import { ActionConstant } from "../actionConstant";
import { userListReducer } from "./userListReducer";

export const rootReducer = (state, action) => {
    const actionConstant = new ActionConstant();
  if (action.type === actionConstant.USER_LOGOUT[0]) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
    userListStore : userListReducer
});
