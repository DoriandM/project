import React from 'react';
import PropTypes from 'prop-types';
import LeftHeader from '~/components/LeftHeader';
import AlertNext from '~/components/App/alertNext';
import ShowAlert from '~/components/App/showAlert';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import HintPop3 from './hintPop3';
import ProgressBar3 from './progressBar3';
import SuccessPop3 from './successPop3';
import './ThirdExercice.styl';

const ThirdExercice = ({
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
          exercice 3
        </h1>
        <p className="description">
          Avoir un Header et des titres c'est super cool pour un être humain, mais nous n'avons pas encore de contenu dans notre page à envoyer à mes amis pour qu'ils viennent me secourir.
        </p>
        <p className="description">
          On ne sait toujours pas séparer les éléments, ni faire de paragraphes. Pourtant on en aurait bien besoin pour afficher du contenu dans notre page, alors comment faire ?
        </p>
        <p className="description">
          Essaye donc de <strong>"div"</strong>iser ton code avec une balise <span className="description-code">{'<div></div>'}</span> et d'y intégrer un <strong>"p"</strong>aragraphe <span className="description-code">{'<p></p>'}</span>. Dans ce paragraphe, écrit le texte suivant :<span className="description-code">Je suis en panne sur la planète Terre. Pour réparer mon vaisseau, voici ce dont j'ai besoin:</span>
        </p>
        {
          showMe ?
            <SuccessPop3 />
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
              {' <body> '} <br />
              {'  '}{' <header> '} <br />
              {'    '}{' <h1>Hello Aliens !</h1> '} <br />
              {'    '}{' <h2>Ceci est un SOS !</h2>'} <br />
              {'  '}{' </header> '}
            </Highlight>
            <form
              className="exercice-form"
              onSubmit={(evt) => {
                evt.preventDefault();
              }}
            >
              <textarea
                className="textarea"
                name="textearea-ex-3"
                rows="4"
                placeholder="Ton code ici"
                value={userValue}
                onChange={trackAnswer}
              />
            </form>
            <Highlight className="code-content-ex">
              {' </body> '}
            </Highlight>
          </div>
        </div>

        <div className="btn">
          <HintPop3 />{' '}
          <Button
            color="success"
            onClick={showView}
          >Envoyer
          </Button>
        </div>
        <ProgressBar3 />
        <AlertNext />
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/ThirdLesson" className="inactive" exact>retour sur le cours</Link>
          </Button>
          <Button color="info">
            <Link to="/FourthLesson" className="inactive" exact>cours suivant</Link>
          </Button>
        </div>
      </div>
      <div className="exercice-right">
        { showMe ?
          <div className="rendu-exercice view-off">
            <header>
              <h1 className="title-exe3">
              Hello Aliens !
              </h1>
              <h2 className="subtitle-ex3">
              Ceci est un SOS
              </h2>
            </header>
            <div className="exo-div3">
              <p className="exo-p3">Je suis en panne sur la planète Terre. Pour réparer mon vaisseau, voici ce dont j'ai besoin:
              </p>
            </div>
          </div> : ''
        }
      </div>
    </div>
  </div>

);
ThirdExercice.propTypes = {
  showView: PropTypes.func.isRequired,
  showMe: PropTypes.string.isRequired,
  showAlert: PropTypes.string.isRequired,
  userValue: PropTypes.string.isRequired,
  trackAnswer: PropTypes.func.isRequired,
};

export default ThirdExercice;
