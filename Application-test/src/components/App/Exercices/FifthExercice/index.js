import React from 'react';
import LeftHeader from '~/components/LeftHeader';
import PropTypes from 'prop-types';
import AlertNext from '~/components/App/alertNext';
import ShowAlert from '~/components/App/showAlert';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import HintPop5 from './hintPop5';
import ProgressBar5 from './progressBar5';
import SuccessPop5 from './successPop5';

import './FifthExercice.styl';

const FifthExercice = ({
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
          exercice 5
        </h1>
        <p className="description">
          J'aimerais bien ajouter ma photo pour que la créature qui nous apportera les matériaux puisse me reconnaitre.
        </p>
        <p className="description">
          Pour cela, il faut créer une nouvelle <span className="description-code">{'<div></div>'}</span> en dessous de celle contenant le paragraphe et la liste, et il faut y intégrer l'image dont la <span className="description-code">{'src=""'}</span> est <span className="description-code">./images/poulpi-loutre.png</span> et dont le <span className="description-code">{'alt=""'}</span> est <span className="description-code">george</span>
        </p>
        <p className="description">
          Je ne voudrais pas qu'on me confonde avec une vulgaire loutre !
        </p>
        {
        showMe ?
          <SuccessPop5 />
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
              {'  '}{'<header> '} <br />
              {'    '}{'<h1>Hello Aliens !</h1>'} <br />
              {'    '}{'<h2>Ceci est un SOS !</h2> '} <br />
              {'  '}{'</header> '} <br />
              {'  '}{'<div> '} <br />
              {'    '}{'<p>Je suis en panne sur la planète Terre.</p> '} <br />
              {'    '}{'<p>Pour réparer mon vaisseau, voici ce dont j\'ai besoin:</p>'} <br />
              {'    '}{'<ol>'} <br />
              {'      '}{'<li>Un Refroidisseur De Téléportation Interplanétaire </li>'} <br />
              {'      '}{'<li>Un Transposeur Galactique</li>'} <br />
              {'      '}{'<li>Un Capteur Tridimensionnel</li>'} <br />
              {'    '}{'</ol>'} <br />
              {'  '}{'</div>'}
            </Highlight>
            <form
              className="exercice-form"
              onSubmit={(evt) => {
                evt.preventDefault();
              }}
            >
              <textarea
                className="textarea"
                name="textearea-ex-5"
                cols="60"
                rows="3"
                placeholder="Ton code ici"
                value={userValue}
                onChange={trackAnswer}
              />
            </form>
          </div>
        </div>

        <div className="btn">
          <HintPop5 />{' '}         
          <Button
            color="success"
            onClick={showView}
          >Envoyer
          </Button>
        </div>
        <ProgressBar5 />
        <AlertNext />
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/FifthLesson" className="inactive" exact>retour sur le cours</Link>
          </Button>
          <Button color="info">
            <Link to="/SixthLesson" className="inactive" exact>cours suivant</Link>
          </Button>
        </div>
      </div>

      <div className="exercice-right">
        { showMe ?
          <div className="rendu-exercice">
            {/* à afficher dynamiquement */}
            <header>
              <h1 className="title-exe5">
                Hello Aliens !
              </h1>
              <h2 className="subtitle-ex5">
                Ceci est un SOS
              </h2>
            </header>
            <div className="exo-div3">
              <p className="exo-p3">Je suis en panne sur la planète Terre. Pour réparer mon vaisseau, voici ce dont j'ai besoin:
              </p>
              <ul>
                <li>Un Refroidisseur De Téléportation Interplanétaire</li>
                <li>Un Transposeur Galactique</li>
                <li>Un Capteur Tridimensionnel</li>
              </ul>
            </div>
            <div className="exo5-img">
              <img
                className="george-exo5"
                src={require('~/images/George.png')}
                alt="george the octo-otter"
              />
            </div>
          </div> : ''
        }
      </div>

    </div>
  </div>
);

FifthExercice.propTypes = {
  showView: PropTypes.func.isRequired,
  showMe: PropTypes.string.isRequired,
  showAlert: PropTypes.string.isRequired,
  userValue: PropTypes.string.isRequired,
  trackAnswer: PropTypes.func.isRequired,
};

export default FifthExercice;
