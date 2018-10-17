const initialState = {
  showMe: false,
  userValue: '',
  showAlert: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRACK_ANSWER_5':
      return {
        ...state,
        userValue: action.value,
      };
    case 'SHOW_VIEW_5':
      console.log(state.userValue);
      if (state.userValue.replace(/\s*/g, '') === '<div><imgsrc="./images/poulpi-loutre.png"alt="george"/></div>') {
        return {
          ...state.userValue,
          showMe: true,
        };
      }
      else if (state.userValue.replace(/\s*/g, '') !== '<div><imgsrc="./images/poulpi-loutre.png"alt="george"/></div>') {
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
