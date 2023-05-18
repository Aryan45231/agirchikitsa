import { ActionConstant } from "../../actionConstant";
import { createReducer } from "../helpers/createReducer";
const initialstate = {
  userList: [],
  loading: false,
  errMsg: null,
};

const loadingSnapshot = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const successSnapshot = (state, action) => {
  return {
    userList: action.payload,
    loading: false,
    errMsg: null,
  };
};

const failSnapshot = (state, action) => {
  return {
    ...state,
    loading: false,
    errMsg: action.payload,
  };
};

export const userListReducer = (state = initialstate, action) => {
  const actionConstant = new ActionConstant();
  return createReducer(
    state,
    action,
    actionConstant.USERLIST_CCONSTANT,
    loadingSnapshot,
    successSnapshot,
    failSnapshot
  );
};
