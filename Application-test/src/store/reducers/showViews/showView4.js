const initialState = {
  showMe: false,
  userValue: '',
  showAlert: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TRACK_ANSWER_4':
      return {
        ...state,
        userValue: action.value,
      };
    case 'SHOW_VIEW_4':
      console.log(state.userValue);
      if (state.userValue.replace(/\s*/g, '') === '<ul><li>UnRefroidisseurDeTéléportationInterplanétaire</li><li>UnTransposeurGalactique</li><li>UnCapteurTridimensionnel</li></ul>') {
        return {
          ...state.userValue,
          showMe: true,
        };
      }
      else if (state.userValue.replace(/\s*/g, '') !== '<ul><li>UnRefroidisseurDeTéléportationInterplanétaire</li><li>UnTransposeurGalactique</li><li>UnCapteurTridimensionnel</li></ul>') {
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
