const initialState = {
  showMe: false,
  userValue: '',
  showAlert: false,
};

const code = '<footer><p>Voicidesinformationsutiles:</p><ul><li><ahref="https://www.facebook.com/george.octootter.7">Spacebook</a></li><li><ahref="https://twitter.com/GOctootter">Astrobird</a></li></ul></footer>';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRACK_ANSWER_6':
      return {
        ...state,
        userValue: action.value,
      };
    case 'SHOW_VIEW_6':
      console.log(state.userValue);
      if (state.userValue.replace(/\s*/g, '') === code) {
        return {
          ...state.userValue,
          showMe: true,
        };
      }
      else if (state.userValue.replace(/\s*/g, '') !== code) {
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

