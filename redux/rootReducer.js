function rootReducer(currentState, action) {
  if (currentState === undefined) {
    return {
      isLogin: false,
    };
  }
  switch (action.type) {
    case 'LoginTrue':
      return {
        ...currentState,
        isLogin: true,
      };
    case 'LoginFalse':
      return {
        ...currentState,
        isLogin: false,
      };
    default:
      return {
        ...currentState,
      };
  }
}

export default rootReducer;
