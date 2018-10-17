import React from 'react';
import PropTypes from 'prop-types';
import LeftHeader from '~/components/LeftHeader';
import AlertNext from '~/components/App/alertNext';
import ShowAlert from '~/components/App/showAlert';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import HintPop4 from './hintPop4';
import ProgressBar4 from './progressBar4';
import SuccessPop4 from './successPop4';
import './FourthExercice.styl';

const FourthExercice = ({
  showView,
  showMe,
  userValue,
  trackAnswer,
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
          exercice 4
        </h1>
        <p className="description">
          C’est bien beau, c’est bien mignon mais maintenant il nous reste le plus important à faire, la liste des objets que je dois récupérer pour réparer mon vaisseau !
        </p>
        <p className="description">
          Pour ça le mieux serait de pouvoir faire une liste non-ordonnée à puces rondes comme sur les logiciels de traitement de texte. Car tous les éléments de ma liste ont la même importance.
        </p>
        <p className="description">
          Ah si seulement il existait une balise en html qui pourrait correspondre à une liste désordonnée... ou “unordered list” comme en anglais…
        </p>
        <p>
          Il faudrait que tu mettes ces 3 éléments dans ta liste: <span className="description-code">Un Refroidisseur De Téléportation Interplanétaire</span>, <span className="description-code">Un Transposeur Galactique</span>, <span className="description-code">Un Capteur Tridimensionnel</span>.
        </p>
        <p className="description">
          Place une liste non-ordonnée en dessous du <span className="description-code">{' <p> '}</span>, elle devra contenir les 3 éléments cités au dessus.
        </p>
        {
          showMe ?
            <SuccessPop4 />
          : ''
        }
        {
          showAlert ?
            <ShowAlert />
          : ''
        }
        <div className="code-editor c-e-ex-4">
          <div className="balises">
            <Highlight className="code-content-ex hljs ada">
              {'<header>'} <br />
              {'  '}{'<h1>Hello Aliens !</h1>'} <br />
              {'  '}{'<h1>Hello Aliens !</h1>'} <br />
              {'</header>'} <br />
              {'<div>'} <br />
              {'  '}{'<p>Je suis en panne sur la planète Terre.'} <br />
              {'    '}{'Pour réparer mon vaisseau voici ce dont j\'ai besoin :</p>'} <br />
            </Highlight>
            <form
              className="exercice-form"
              onSubmit={(evt) => {
                evt.preventDefault();
              }}
            >
              <textarea
                className="textarea"
                name="textearea-ex-4"
                rows="4"
                placeholder="Ton code ici"
                value={userValue}
                onChange={trackAnswer}
              />
            </form>
            <Highlight className="code-content-ex hljs ada">
              {'</div>'} <br />
            </Highlight>
          </div>
        </div>

        <div className="btn">
          <HintPop4 />{' '}
          <Button
            color="success"
            onClick={showView}
          >Envoyer
          </Button>
        </div>
        <ProgressBar4 />
        <AlertNext />
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/FourthLesson" className="inactive" exact>Retour sur le cours</Link>
          </Button>
          <Button color="info">
            <Link to="/FifthLesson" className="inactive" exact>Cours suivant</Link>
          </Button>
        </div>
      </div>


      <div className="exercice-right">
        { showMe ?
          <div className="rendu-exercice">
            <header>
              <h1 className="title-exe">
                Hello Aliens !
              </h1>
              <h2 className="subtitle-ex">
                Ceci est un SOS
              </h2>
            </header>
            <div>
              <p>
                Je suis en panne sur la planète Terre. Pour réparer mon vaisseau, voici ce dont j'ai besoin:
              </p>
              <ul>
                <li>
                    Un Refroidisseur De Téléportation Interplanétaire
                </li>
                <li>
                  Un Transposeur Galactique
                </li>
                <li>
                  Un Capteur Tridimensionnel
                </li>
              </ul>
            </div>
          </div> : ''
        }
      </div>

    </div>
  </div>

);

FourthExercice.propTypes = {
  showView: PropTypes.func.isRequired,
  showMe: PropTypes.string.isRequired,
  showAlert: PropTypes.string.isRequired,
  userValue: PropTypes.string.isRequired,
  trackAnswer: PropTypes.func.isRequired,
};

export default FourthExercice;
