import { connect } from 'react-redux';

import SecondExercice from '~/components/App/Exercices/SecondExercice';

const mapStateToProps = state => ({
  showMe: state.showView2.showMe,
  showAlert: state.showView2.showAlert,
  userValue: state.showView2.userValue,
  userValue2: state.showView2.userValue2,
});

const mapDispatchToProps = dispatch => ({
  showView: () => {
    dispatch({
      type: 'SHOW_VIEW_2',
    });
  },
  trackAnswer: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'TRACK_ANSWER_2',
      value,
    });
  },
  trackAnswer2: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'TRACK_ANSWER_2b',
      value,
    });
  },
});

const SecondExerciceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecondExercice);

export default SecondExerciceContainer;
