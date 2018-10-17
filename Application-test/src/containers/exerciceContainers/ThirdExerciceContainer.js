import { connect } from 'react-redux';

import ThirdExercice from '~/components/App/Exercices/ThirdExercice';

const mapStateToProps = (state, ownProps) => ({
  showMe: state.showView3.showMe,
  userValue: state.showView3.userValue,
  showAlert: state.showView3.showAlert,
});

const mapDispatchToProps = dispatch => ({
  showView: () => {
    dispatch({
      type: 'SHOW_VIEW_3',
    });
  },
  trackAnswer: (evt) => {
    const { value } = evt.target;
    dispatch({
      type: 'TRACK_ANSWER_3',
      value,
    });
  },
});

const ThirdExerciceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThirdExercice);

export default ThirdExerciceContainer;
