export const switchAction = (
  dispatch,
  actionState = 0,
  actionConstant,
  payload = {}
) => {
  switch (actionState) {
    case 1:
      return dispatch({
        type: actionConstant[1],
        payload,
      });
    case 2:
      return dispatch({
        type: actionConstant[2],
        payload,
      });
    default:
      return dispatch({
        type: actionConstant[0],
      });
  }
};
