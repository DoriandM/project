const initialState = {
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  q6: '',
  q7: '',
  a1: 0,
  a2: 0,
  a3: 0,
  a4: 0,
  a5: 0,
  a6: 0,
  a7: 0,
  totalRightAnswer: 0,
  quizzPop: false,
  right1: false,
  right2: false,
  right3: false,
  right4: false,
  right5: false,
  right6: false,
  right7: false,
  wrong1: false,
  wrong2: false,
  wrong3: false,
  wrong4: false,
  wrong5: false,
  wrong6: false,
  wrong7: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // ──────────────────────────────────────────────HandleChange1──────────────────────────────────────────────
    case 'HANDLE_CHANGE_Q1':
      return {
        ...state,
        q1: action.value,
      };

    // ──────────────────────────────────────────────HandleChange2──────────────────────────────────────────────
    case 'HANDLE_CHANGE_Q2':
      return {
        ...state,
        q2: action.value,
      };

    // ──────────────────────────────────────────────HandleChange3──────────────────────────────────────────────
    case 'HANDLE_CHANGE_Q3':
      return {
        ...state,
        q3: action.value,
      };

    // ──────────────────────────────────────────────HandleChange4──────────────────────────────────────────────
    case 'HANDLE_CHANGE_Q4':
      return {
        ...state,
        q4: action.value,
      };

    // ──────────────────────────────────────────────HandleChange5──────────────────────────────────────────────
    case 'HANDLE_CHANGE_Q5':
      return {
        ...state,
        q5: action.value,
      };

    // ──────────────────────────────────────────────HandleChange6──────────────────────────────────────────────
    case 'HANDLE_CHANGE_Q6':
      return {
        ...state,
        q6: action.value,
      };

    // ──────────────────────────────────────────────HandleChange7──────────────────────────────────────────────
    case 'HANDLE_CHANGE_Q7':
      return {
        ...state,
        q7: action.value,
      };


    // ─────────────────────────────────q1─────────────────────────────────
    case 'CHECK1':
      if (state.q1 === 'q1-a2') {
        return {
          ...state,
          a1: 1,
        };
      }
      else if (state.q1 !== 'q1-a2') {
        return {
          ...state,
          a1: 0,
        };
      }
      break;
      // ─────────────────────────────────q2─────────────────────────────────
    case 'CHECK2':
      if (state.q2 === 'q2-a4') {
        return {
          ...state,
          a2: 1,
        };
      }
      else if (state.q2 !== 'q2-a4') {
        return {
          ...state,
          a2: 0,
        };
      }
      break;
      // ─────────────────────────────────q3─────────────────────────────────
    case 'CHECK3':
      if (state.q3 === 'q3-a1') {
        return {
          ...state,
          a3: 1,
        };
      }
      else if (state.q3 !== 'q3-a1') {
        return {
          ...state,
          a3: 0,
        };
      }
      break;
      // ─────────────────────────────────q4─────────────────────────────────
    case 'CHECK4':
      if (state.q4 === 'q4-a2') {
        return {
          ...state,
          a4: 1,
        };
      }
      else if (state.q4 !== 'q4-a2') {
        return {
          ...state,
          a4: 0,
        };
      }
      break;
      // ─────────────────────────────────q5─────────────────────────────────
    case 'CHECK5':
      if (state.q5 === 'q5-a4') {
        return {
          ...state,
          a5: 1,
        };
      }
      else if (state.q5 !== 'q5-a4') {
        return {
          ...state,
          a5: 0,
        };
      }
      break;
      // ─────────────────────────────────q6─────────────────────────────────
    case 'CHECK6':
      if (state.q6 === 'q6-a3') {
        return {
          ...state,
          a6: 1,
        };
      }
      else if (state.q6 !== 'q6-a3') {
        return {
          ...state,
          a6: 0,
        };
      }
      break;
      // ─────────────────────────────────q7─────────────────────────────────
    case 'CHECK7':
      if (state.q7 === 'q7-a1') {
        return {
          ...state,
          a7: 1,
        };
      }
      else if (state.q7 !== 'q7-a1') {
        return {
          ...state,
          a7: 0,
        };
      }
      break;
      // ──────────────────────────────────────────────HandleColor──────────────────────────────────────────────
      
    case 'HANDLE_COLOR_1':
      return {
        ...state,
        c1: action.currentClassname,
      };

      // ──────────────────────────────────────────────ShowResult──────────────────────────────────────────────
    case 'SHOW_RESULT':
      return {
        ...state,
        totalRightAnswer: state.a1 + state.a2 + state.a3 + state.a4 + state.a5 + state.a6 + state.a7,
        quizzPop: true,
      };

    case 'COLOR1':
      if (state.a1 === 1) {
        return {
          ...state,
          right1: true,
          wrong1: false,
        };
      }
      else if (state.a1 === 0) {
        return {
          ...state,
          right1: false,
          wrong1: true,
        };
      }
      break;
    case 'COLOR2':
      if (state.a2 === 1) {
        return {
          ...state,
          right2: true,
          wrong2: false,
        };
      }
      else if (state.a2 === 0) {
        return {
          ...state,
          right2: false,
          wrong2: true,
        };
      }
      break;

    case 'COLOR3':
      if (state.a3 === 1) {
        return {
          ...state,
          right3: true,
          wrong3: false,
        };
      }
      else if (state.a3 === 0) {
        return {
          ...state,
          right3: false,
          wrong3: true,
        };
      }
      break;

    case 'COLOR4':
      if (state.a4 === 1) {
        return {
          ...state,
          right4: true,
          wrong4: false,
        };
      }
      else if (state.a4 === 0) {
        return {
          ...state,
          right4: false,
          wrong4: true,
        };
      }
      break;

    case 'COLOR5':
      if (state.a5 === 1) {
        return {
          ...state,
          right5: true,
          wrong5: false,
        };
      }
      else if (state.a5 === 0) {
        return {
          ...state,
          right5: false,
          wrong5: true,
        };
      }
      break;

    case 'COLOR6':
      if (state.a6 === 1) {
        return {
          ...state,
          right6: true,
          wrong6: false,
        };
      }
      else if (state.a6 === 0) {
        return {
          ...state,
          right6: false,
          wrong6: true,
        };
      }
      break;

    case 'COLOR7':
      if (state.a7 === 1) {
        return {
          ...state,
          right7: true,
          wrong7: false,
        };
      }
      else if (state.a7 === 0) {
        return {
          ...state,
          right7: false,
          wrong7: true,
        };
      }
      break;


    default: return state;
  }
};

export default reducer;
