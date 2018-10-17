import React from 'react';
import LeftHeader from '~/components/LeftHeader';
import PropTypes from 'prop-types';
import AlertNext from '~/components/App/alertNext';
import ShowAlert from '~/components/App/showAlert';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

import HintPop6 from './hintPop6';
import ProgressBar6 from './progressBar6';
import SuccessPop6 from './successPop6';
import './SixthExercice.styl';

const SixthExercice = ({
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
          Exercice 6
        </h1>
        <p className="description">
          Maintenant il faudrait que je laisse mes coordonnées, il faut bien que je puisse leur indiquer le chemin s'ils se perdent en amenant les matériaux!
        </p>
        <p className="description">
          Tant qu'à faire, autant mettre directement les liens de mon spacebook et mon astrobird.
        </p>
        <p className="description">
          Ajoute un <span className="description-code">{'<footer></footer>'}</span> en dessous de la div contenant l'image, mets y un paragraphe <span className="description-code">{'<p></p>'}</span> contenant <span className="description-code">Voici des informations utiles:</span> , puis une liste non-ordonnée qui contiendra dans chaque <span className="description-code">{' <li> '}</span> un lien <span className="description-code">{'<a></a>'}</span>
        </p>
        <p className="description">
          Le premier lien est "https://www.facebook.com/george.octootter.7", et le second lien est "https://twitter.com/GOctootter".
        </p>
        {
          showMe ?
            <SuccessPop6 />
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
              {'  '}{' <header> '} <br />
              {'    '}{' <h1>Hello Aliens !</h1>'} <br />
              {'    '}{' <h2>Ceci est un SOS</h2>'} <br />
              {'  '}{' </header> '} <br />
              {'  '}{' <div> '} <br />
              {'    '}{' <p>Je suis en panne sur la planète Terre.</p> '} <br />
              {'    '}{" <p>Pour réparer mon vaisseau, voici ce dont j'ai besoin:</p> "} <br />
              {'    '}{' <ol> '} <br />
              {'      '}{' <li>Un Refroidisseur de Téléportation Interplanétaire</li> '} <br />
              {'      '}{' <li>Un Transposeur Galactique</li> '} <br />
              {'      '}{' <li>Un Capteur Tridimensionnel</li> '} <br />
              {'    '}{' </ol> '} <br />
              {'  '}{' </div> '} <br />
              {'  '}{' <img src="./images/George.png" alt="Photo de George"> '} <br />
            </Highlight>
            <form
              className="exercice-form"
              onSubmit={(evt) => {
                evt.preventDefault();
              }}
            >
              <textarea
                className="textarea"
                name="textearea-ex-6"
                rows="5"
                maxLength="1000"
                placeholder="Ton code ici"
                value={userValue}
                onChange={trackAnswer}
              />
            </form>
          </div>
        </div>

        <div className="btn">
          <HintPop6 />{' '}
          <Button
            color="success"
            onClick={showView}
          >Envoyer
          </Button>
        </div>
        <ProgressBar6 />
        <AlertNext />
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/SixthLesson" className="inactive" exact>retour sur le cours</Link>
          </Button>
          <Button color="info">
            <Link to="/QuizzHtml" className="inactive" exact>cours suivant</Link>
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
              <p>Je suis en panne sur la planète Terre. Pour réparer mon vaisseau, voici ce dont j'ai besoin:</p>
              <ul className="ul-e7">
                <li>Un Refroidisseur De Téléportation Interplanétaire</li>
                <li>Un Transposeur Galactique</li>
                <li>Un Capteur Tridimensionnel</li>
              </ul>
              <p>Si vous avez oublié à quoi je ressemble, voici ma photo de profile spacebook: </p>
            </div>

            <div>
              <img
                src={require('~/images/George.png')}
                alt="poulpi-loutre"
                className="exercice7-george"
              />
            </div>

            <footer>
              <div>
                <p>
                  Voici des informations utiles:
                </p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/george.octootter.7"
                    >
                      Spacebook
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/GOctootter"
                    >
                      Astrobird
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div> : ''
        }
      </div>
    </div>
  </div>

);

SixthExercice.propTypes = {
  showView: PropTypes.func.isRequired,
  showMe: PropTypes.string.isRequired,
  showAlert: PropTypes.string.isRequired,
  userValue: PropTypes.string.isRequired,
  trackAnswer: PropTypes.func.isRequired,
};

export default SixthExercice;
