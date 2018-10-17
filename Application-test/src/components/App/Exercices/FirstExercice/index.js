import React from 'react';
import PropTypes from 'prop-types';
import LeftHeader from '~/components/LeftHeader';
import AlertNext from '~/components/App/alertNext';
import ShowAlert from '~/components/App/showAlert';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import SuccessPop1 from './successPop1';
import HintPop1 from './hintPop1';
import ProgressBar1 from './progressBar1';

import './FirstExercice.styl';

const FirstExercice = ({
  showView,
  showMe,
  userValue,
  trackAnswer,
  showAlert,
}) => (

  <div className="wrapper">
    <div className="exercice-left">
      <LeftHeader />
      <img
        src={require('~/images/George.png')}
        alt="george the octo-otter"
        className="exercice-george"
      />

      <div className="exercice-state">
        <h1>Exercice 1</h1>
        <p className="description">
          Mon cher humain, pour pouvoir communiquer avec mes amis afin qu’ils nous envoient les matériaux, il faut commencer par donner un sujet a notre page. Dans l'éditeur de code ci dessous, crée le titre principal <span className="description-code">{'<h1>Hello Aliens !</h1>'}</span> dans le body.
        </p>
      </div>
      {
        showMe ?
          <SuccessPop1 />
        : ''
      }
      {
        showAlert ?
          <ShowAlert />
        : ''
      }
      <div className="code-editor">
        <div className="balises">
          <Highlight className="code-content-ex">
            {'<body>'}
          </Highlight>
          <form
            className="exercice-form"
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
          >
            <textarea
              className="textarea"
              name="textearea-ex-1"
              rows="1"
              placeholder="Ton code ici"
              value={userValue}
              onChange={trackAnswer}
            />
          </form>
          <Highlight className="code-content-ex">
            {'</body>'}
          </Highlight>
        </div>
      </div>

      <div className="btn">
        <HintPop1 />{' '}
        <Button
          color="success"
          onClick={showView}
        >Envoyer
        </Button>
      </div>
      <ProgressBar1 />
      <AlertNext />
      <div className="arrow-ex">
        <Button color="info">
          <Link to="/FirstLesson" className="inactive" exact>Leçon précedente</Link>
        </Button>       
        <Button color="info">
          <Link to="/SecondLesson" className="inactive" exact>Leçon suivante</Link>
        </Button>
      </div>
    </div>

    <div className="exercice-right">
      { showMe ?
        <div className="rendu-exercice view-off">
          <h1>Hello Aliens !</h1>
        </div> : ''
      }
    </div>
  </div>

);

FirstExercice.propTypes = {
  showView: PropTypes.func.isRequired,
  showMe: PropTypes.string.isRequired,
  showAlert: PropTypes.string.isRequired,
  userValue: PropTypes.string.isRequired,
  trackAnswer: PropTypes.func.isRequired,
};

export default FirstExercice;
