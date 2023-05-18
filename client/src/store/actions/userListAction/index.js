import { ActionConstant } from "../../actionConstant";
import { switchAction } from "../helpers/index";
export const setUserListAction = (dispatch, actionState = 0, payload = {}) => {
  const actionConstant = new ActionConstant().USERLIST_CCONSTANT;
  switchAction(dispatch, actionState, actionConstant, payload);
};
