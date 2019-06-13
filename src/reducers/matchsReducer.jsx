const matchsReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_MATCHS':
      return action.payload;
      // statements_1
    default:
      // statements_def
      return state;
  }
};
export default matchsReducer;
