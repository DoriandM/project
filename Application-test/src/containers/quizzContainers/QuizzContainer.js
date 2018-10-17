import { connect } from 'react-redux';

import Quizz from '~/components/Quizz/QuizzHtml';


const mapStateToProps = (state, ownProps) => ({
  q1: state.quizzReducer.q1,
  q2: state.quizzReducer.q2,
  q3: state.quizzReducer.q3,
  q4: state.quizzReducer.q4,
  q5: state.quizzReducer.q5,
  q6: state.quizzReducer.q6,
  q7: state.quizzReducer.q7,
  quizzPop: state.quizzReducer.quizzPop,
  totalRightAnswer: state.quizzReducer.totalRightAnswer,
  a1: state.quizzReducer.a1,
  a2: state.quizzReducer.a2,
  a3: state.quizzReducer.a3,
  a4: state.quizzReducer.a4,
  a5: state.quizzReducer.a5,
  a6: state.quizzReducer.a6,
  a7: state.quizzReducer.a7,
  right1: state.quizzReducer.right1,
  wrong1: state.quizzReducer.wrong1,
  right2: state.quizzReducer.right2,
  wrong2: state.quizzReducer.wrong2,
  right3: state.quizzReducer.right3,
  wrong3: state.quizzReducer.wrong3,
  right4: state.quizzReducer.right4,
  wrong4: state.quizzReducer.wrong4,
  right5: state.quizzReducer.right5,
  wrong5: state.quizzReducer.wrong5,
  right6: state.quizzReducer.right6,
  wrong6: state.quizzReducer.wrong6,
  right7: state.quizzReducer.right7,
  wrong7: state.quizzReducer.wrong7,
});

const mapDispatchToProps = dispatch => ({


  handleChangeQ1: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'HANDLE_CHANGE_Q1',
      value,
    });
  },
  handleChangeQ2: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'HANDLE_CHANGE_Q2',
      value,
    });
  },
  handleChangeQ3: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'HANDLE_CHANGE_Q3',
      value,
    });
  },
  handleChangeQ4: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'HANDLE_CHANGE_Q4',
      value,
    });
  },
  handleChangeQ5: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'HANDLE_CHANGE_Q5',
      value,
    });
  },
  handleChangeQ6: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'HANDLE_CHANGE_Q6',
      value,
    });
  },
  handleChangeQ7: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'HANDLE_CHANGE_Q7',
      value,
    });
  },


  checkAnswers: () => {
    dispatch({
      type: 'CHECK1',
    });
    dispatch({
      type: 'CHECK2',
    });
    dispatch({
      type: 'CHECK3',
    });
    dispatch({
      type: 'CHECK4',
    });
    dispatch({
      type: 'CHECK5',
    });
    dispatch({
      type: 'CHECK6',
    });
    dispatch({
      type: 'CHECK7',
    });
    dispatch({
      type: 'SHOW_RESULT',
    });
    dispatch({
      type: 'COLOR1',
    });
    dispatch({
      type: 'COLOR2',
    });
    dispatch({
      type: 'COLOR3',
    });
    dispatch({
      type: 'COLOR4',
    });
    dispatch({
      type: 'COLOR5',
    });
    dispatch({
      type: 'COLOR6',
    });
    dispatch({
      type: 'COLOR7',
    });
  },
});


const QuizzContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quizz);

export default QuizzContainer;
