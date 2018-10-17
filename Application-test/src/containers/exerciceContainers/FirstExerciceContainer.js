import { connect } from 'react-redux';

import FirstExercice from '~/components/App/Exercices/FirstExercice';

const mapStateToProps = state => ({
  showMe: state.showView1.showMe,
  userValue: state.showView1.userValue,
  showAlert: state.showView1.showAlert,
});

const mapDispatchToProps = dispatch => ({
  showView: () => {
    dispatch({
      type: 'SHOW_VIEW_1',
    });
  },
  trackAnswer: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'TRACK_ANSWER_1',
      value,
    });
  },
});

const FirstExerciceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstExercice);

export default FirstExerciceContainer;
