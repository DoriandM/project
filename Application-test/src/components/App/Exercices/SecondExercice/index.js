import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import LeftHeader from '~/components/LeftHeader';
import AlertNext from '~/components/App/alertNext';
import ShowAlert from '~/components/App/showAlert';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import HintPop2 from './hintPop2';
import ProgressBar2 from './progressBar2';
import SuccessPop2 from './successPop2';

import './SecondExercice.styl';

const SecondExercice = ({
  showView,
  showMe,
  userValue,
  trackAnswer,
  userValue2,
  trackAnswer2,
  showAlert,
}) => (

  <div>
    <div className="wrapper">
      <div className="exercice-left">
        <LeftHeader />
        <img
          src={require('~/images/George.png')}
          alt="george the octo-otter"
          className="exercice-george"
        />

        <h1 className="left-title">
          exercice 2
        </h1>
        <p className="description">
          Regarde moi ce h1, il s’embête tout seul, et il ne sait plus où se mettre. Je pense qu’il faudrait lui donner de la compagnie et un endroit où s’asseoire. Essaye de créer un <span className="description-code">{'<header></header>'}</span> à l'intérieur duquel on retrouvera ton <span className="description-code">{'<h1>'}</span>, et ajoutes y son petit frère <span className="description-code">{'<h2>'}</span>contenant le texte suivant: <span className="description-code">Ceci est un SOS</span>
        </p>
        {
          showMe ?
            <SuccessPop2 />
          : ''
        }
        {
          showAlert ?
            <ShowAlert />
          : ''
        }
        <div className="code-editor">
          <div className="balises">
            <Highlight className="code-content-ex hljs ada">
              {' <body> '}
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
                placeHolder="Ton code ici"
                value={userValue}
                onChange={trackAnswer}
              />

              <Highlight className="code-content-ex hljs ada">
                {'  '}{' <h1>Hello Aliens !</h1>'}
              </Highlight>

              <textarea
                className="textarea"
                name="textearea-ex-1"
                rows="2"
                placeHolder="Ton code ici"
                value={userValue2}
                onChange={trackAnswer2}
              />
            </form>
            <Highlight className="code-content-ex hljs ada">
              {' </body> '}
            </Highlight>
          </div>
        </div>

        <div className="btn">
          <HintPop2 />{' '}
          <Button
            color="success"
            onClick={showView}
          >Envoyer
          </Button>
        </div>
        <ProgressBar2 />
        <AlertNext />
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/SecondLesson" className="inactive" exact>retour sur le cours</Link>
          </Button>
          <Button color="info">
            <Link to="/ThirdLesson" className="inactive" exact>cours suivant</Link>
          </Button>
        </div>
      </div>
      <div className="exercice-right">
        { showMe ?
          <div className="rendu-exercice view-off">
            <h1>Hello Aliens !</h1>
            <h2>Ceci est un SOS</h2>
          </div> : ''
        }
      </div>
    </div>
  </div>

);

SecondExercice.propTypes = {
  showView: PropTypes.func.isRequired,
  showMe: PropTypes.string.isRequired,
  showAlert: PropTypes.string.isRequired,
  userValue: PropTypes.string.isRequired,
  trackAnswer: PropTypes.func.isRequired,
  userValue2: PropTypes.string.isRequired,
  trackAnswer2: PropTypes.func.isRequired,
};

export default SecondExercice;
