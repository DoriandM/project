import { connect } from 'react-redux';

import FourthExercice from '~/components/App/Exercices/FourthExercice';

const mapStateToProps = (state, ownProps) => ({
  showMe: state.showView4.showMe,
  userValue: state.showView4.userValue,
  showAlert: state.showView4.showAlert,
});

const mapDispatchToProps = dispatch => ({
  showView: () => {
    dispatch({
      type: 'SHOW_VIEW_4',
    });
  },
  trackAnswer: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'TRACK_ANSWER_4',
      value,
    });
  },
});

const FourthExerciceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FourthExercice);

export default FourthExerciceContainer;
