const initialState = {
  showMe: false,
  showAlert: false,
  userValue: '',
  userValue2: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRACK_ANSWER_2':
      return {
        ...state,
        userValue: action.value,

      };
    case 'TRACK_ANSWER_2b':
      return {
        ...state,
        userValue2: action.value,
      };
    case 'SHOW_VIEW_2':
      console.log(state.userValue);
      if (state.userValue.replace(/\s*/g, '') === '<header>' && state.userValue2.replace(/\s*/g, '') === '<h2>CeciestunSOS</h2></header>') {
        return {
          ...state.userValue && state.userValue2,
          showMe: true,
        };
      }
      else if (state.userValue.replace(/\s*/g, '') !== '<header>' || state.userValue2.replace(/\s*/g, '') !== '<h2>CeciestunSOS</h2></header>') {
        return {
          ...state,
          showAlert: true,
        };
      }
      break;

    default: return state;
  }
};

export default reducer;
