import { connect } from 'react-redux';

import SucessPopQuizz from '~/components/Quizz/QuizzHtml/successPopQuizz';

const mapStateToProps = (state, ownProps) => ({
  totalRightAnswer: state.quizzReducer.totalRightAnswer,

});

const mapDispatchToProps = null;

const SuccessPopQuizzContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SucessPopQuizz);

export default SuccessPopQuizzContainer;
