export const createReducer = (
  state,
  action,
  actionArray,
  loadingSnapshot,
  successSnapshot,
  failSnapshot
) => {
  switch (action.type) {
    case actionArray[0]:
      return loadingSnapshot(state, action);
    case actionArray[1]:
      return successSnapshot(state, action);
    case actionArray[2]:
      return failSnapshot(state, action);
    default:
      return state;
  }
};
