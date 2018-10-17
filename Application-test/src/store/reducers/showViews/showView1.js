const initialState = {
  showMe: false,
  userValue: '',
  showAlert: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRACK_ANSWER_1':
      return {
        ...state,
        userValue: action.value,
      };
    case 'SHOW_VIEW_1':
      console.log(state.userValue);
      if (state.userValue.replace(/\s*/g, '') === '<h1>HelloAliens!</h1>') {
        return {
          ...state.userValue,
          showMe: true,
        };
      }
      else if (state.userValue.replace(/\s*/g, '') !== '<h1>HelloAliens!</h1>') {
        return {
          ...state,
          showAlert: true,
        };
      }
      break;
    case 'HIDE_VIEW':
      return {
        ...state,
        showMe: false,
      };
    default: return state;
  }
};

export default reducer;
