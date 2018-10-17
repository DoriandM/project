import { connect } from 'react-redux';

import SixthExercice from '~/components/App/Exercices/SixthExercice';

const mapStateToProps = (state, ownProps) => ({
  showMe: state.showView6.showMe,
  userValue: state.showView6.userValue,
  showAlert: state.showView6.showAlert,
});

const mapDispatchToProps = dispatch => ({
  showView: () => {
    dispatch({
      type: 'SHOW_VIEW_6',
    });
  },
  trackAnswer: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'TRACK_ANSWER_6',
      value,
    });
  },
});

const SixthExerciceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SixthExercice);

export default SixthExerciceContainer;
