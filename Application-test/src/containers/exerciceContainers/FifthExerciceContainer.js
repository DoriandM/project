import { connect } from 'react-redux';

import FifthExercice from '~/components/App/Exercices/FifthExercice';

const mapStateToProps = (state, ownProps) => ({
  showMe: state.showView5.showMe,
  userValue: state.showView5.userValue,
  showAlert: state.showView5.showAlert,
});

const mapDispatchToProps = dispatch => ({
  showView: () => {
    dispatch({
      type: 'SHOW_VIEW_5',
    });
  },
  trackAnswer: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'TRACK_ANSWER_5',
      value,
    });
  },
});

const FifthExerciceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FifthExercice);

export default FifthExerciceContainer;
