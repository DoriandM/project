import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LeftHeader from '~/components//LeftHeader';
import SuccessPopQuizzContainer from '~/containers/quizzContainers/SuccessPopQuizzContainer';

import { Button } from 'reactstrap';
import QuizzBadge from './QuizzBadge';

import './QuizzHtml.styl';

const QuizzHtml = ({
  handleChangeQ1,
  handleChangeQ2,
  handleChangeQ3,
  handleChangeQ4,
  handleChangeQ5,
  handleChangeQ6,
  handleChangeQ7,
  quizzPop,
  checkAnswers,
  right1,
  right2,
  right3,
  right4,
  right5,
  right6,
  right7,
  wrong1,
  wrong2,
  wrong3,
  wrong4,
  wrong5,
  wrong6,
  wrong7,
}) => {
  const currentClassName1 = classNames(
    'firstAnswers',
    {
      'firstAnswers--right': right1,
      'firstAnswers--wrong': wrong1,
    },
  );
  const currentClassName2 = classNames(
    'secondAnswers',
    {
      'secondAnswers--right': right2,
      'secondAnswers--wrong': wrong2,
    },
  );
  const currentClassName3 = classNames(
    'thirdAnswers',
    {
      'thirdAnswers--right': right3,
      'thirdAnswers--wrong': wrong3,
    },
  );
  const currentClassName4 = classNames(
    'fourthAnswers',
    {
      'fourthAnswers--right': right4,
      'fourthAnswers--wrong': wrong4,
    },
  );
  const currentClassName5 = classNames(
    'fifthAnswers',
    {
      'fifthAnswers--right': right5,
      'fifthAnswers--wrong': wrong5,
    },
  );
  const currentClassName6 = classNames(
    'sixthAnswers',
    {
      'sixthAnswers--right': right6,
      'sixthAnswers--wrong': wrong6,
    },
  );
  const currentClassName7 = classNames(
    'seventhAnswers',
    {
      'seventhAnswers--right': right7,
      'seventhAnswers--wrong': wrong7,
    },
  );
 
  return (
    <div className="QuizzWrapper">
      <LeftHeader />
      <QuizzBadge />
      <img
        src={require('~/images/George.png')}
        alt="george the octo-otter"
        className="quizz-george"
      />
      <div className="introduction">
        <p>
      Bravo, cher humain ! Tu as réussi à mettre en place une page qui permettra à mes amis de me retrouver.
        </p>
        <p>
      En les attendant, je vais te poser quelques questions.
        </p>

      </div>
      <div className="quizz-wrapper">
        <div className="quizz">
          <div className="first-question">
            <h2 className="question">
            Q1. Quelle balise doit encapsuler tout ton HTML?
            </h2>
            <div className="answers">

              <form
                onSubmit={(evt) => {
                evt.preventDefault();
              }}
              >
                <div className={currentClassName1}>
                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q1"
                        className="radioBtn"
                        value="q1-a1"
                        onChange={handleChangeQ1}
                      />
                      {'<p>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q1"
                        className="radioBtn"
                        value="q1-a2"
                        onChange={handleChangeQ1}
                      />
                      {'<html>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q1"
                        className="radioBtn"
                        value="q1-a3"
                        onChange={handleChangeQ1}
                      />
                      {'<head>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q1"
                        className="radioBtn"
                        value="q1-a4"
                        onChange={handleChangeQ1}
                      />
                      {'<h1>'}
                    </label>
                  </div>
                </div>
              </form>

            </div>
          </div>

          <div className="second-question">
            <h2 className="question">
          Q2. Quelle balise dois-tu utiliser pour afficher un titre dans l'onglet de ta page web?
            </h2>
            <div className="answers">

              <form
                onSubmit={(evt) => {
                evt.preventDefault();
              }}
              >
                <div className={currentClassName2}>
                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q2"
                        className="radioBtn"
                        value="q2-a1"
                        onChange={handleChangeQ2}
                      />

                      {'<header>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q2"
                        className="radioBtn"
                        value="q2-a2"
                        onChange={handleChangeQ2}
                      />
                      {'<h1>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q2"
                        className="radioBtn"
                        value="q2-a3"
                        onChange={handleChangeQ2}
                      />
                      {'<html>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q2"
                        className="radioBtn"
                        value="q2-a4"
                        onChange={handleChangeQ2}
                      />
                      {'<title>'}
                    </label>
                  </div>
                </div>
              </form>

            </div>
          </div>

          <div className="third-question">
            <h2 className="question">
        Q3. Je veux afficher un titre sur ma page web. Laquelle de ces balises a la plus grande taille ?
            </h2>
            <div className="answers">

              <form
                onSubmit={(evt) => {
                evt.preventDefault();
              }}
              >
                <div className={currentClassName3}>
                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q3"
                        className="radioBtn"
                        value="q3-a1"
                        onChange={handleChangeQ3}
                      />
                      {'<h1>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q3"
                        className="radioBtn"
                        value="q3-a2"
                        onChange={handleChangeQ3}
                      />
                      {'<h2>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q3"
                        className="radioBtn"
                        value="q3-a3"
                        onChange={handleChangeQ3}
                      />
                      {'<h3>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q3"
                        className="radioBtn"
                        value="q3-a4"
                        onChange={handleChangeQ3}
                      />
                      {'<h4>'}
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="fourth-question">
            <h2 className="question">
              Q4. La balise {' <div> '} nous sert à :
            </h2>
            <div className="answers">

              <form
                onSubmit={(evt) => {
                evt.preventDefault();
              }}
              >
                <div className={currentClassName4}>
                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q4"
                        className="radioBtn"
                        value="q4-a1"
                        onChange={handleChangeQ4}
                      />
                    Afficher un paragraphe
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q4"
                        className="radioBtn"
                        value="q4-a2"
                        onChange={handleChangeQ4}
                      />
                    Créer un conteneur pour notre code
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q4"
                        className="radioBtn"
                        value="q4-a3"
                        onChange={handleChangeQ4}
                      />
                    Rédiger une liste
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q4"
                        className="radioBtn"
                        value="q4-a4"
                        onChange={handleChangeQ4}
                      />
                     Afficher un titre dans l'onglet de la page web
                    </label>
                  </div>
                </div>
              </form>

            </div>
          </div>

          <div className="fifth-question">
            <h2 className="question">
        Q5. Pour créer une liste ordonnée, je dois utiliser:
            </h2>
            <div className="answers">

              <form
                onSubmit={(evt) => {
                evt.preventDefault();
              }}
              >
                <div className={currentClassName5}>
                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q5"
                        className="radioBtn"
                        value="q5-a1"
                        onChange={handleChangeQ5}
                      />
                      <p className="first-line">{'<ul>'}</p>
                      <p className="second-line">{'<li>'}</p>
                      <p className="third-line">{'<li>'}</p>
                      <p className="fourth-line">{'</ul>'}</p>
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q5"
                        className="radioBtn"
                        value="q5-a2"
                        onChange={handleChangeQ5}
                      />
                      <p className="first-line">{'<li>'}</p>
                      <p className="second-line">{'<ol>'}</p>
                      <p className="third-line">{'<ol>'}</p>
                      <p className="fourth-line">{'</li>'}</p>
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q5"
                        className="radioBtn"
                        value="q5-a3"
                        onChange={handleChangeQ5}
                      />
                      <p className="first-line">{'<ol>'}</p>
                      <p className="second-line">{'<ul>'}</p>
                      <p className="third-line">{'<ul>'}</p>
                      <p className="fourth-line">{'</ol>'}</p>
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q5"
                        className="radioBtn"
                        value="q5-a4"
                        onChange={handleChangeQ5}
                      />
                      <p className="first-line">{'<ol>'}</p>
                      <p className="second-line">{'<li>'}</p>
                      <p className="third-line">{'<li>'}</p>
                      <p className="fourth-line">{'</ol>'}</p>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="sixth-question">
            <h2 className="question">
        Q6. Laquelle de ces lignes de code me permettra d'afficher une image ?
            </h2>
            <div className="answers">

              <form
                onSubmit={(evt) => {
                evt.preventDefault();
              }}
              >
                <div className={currentClassName6}>
                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q6"
                        className="radioBtn"
                        value="q6-a1"
                        onChange={handleChangeQ6}
                      />
                      {'<src=img"./images/poulpi-loutre.png" alt="photo de George">'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q6"
                        className="radioBtn"
                        value="q6-a2"
                        onChange={handleChangeQ6}
                      />
                      {'<img alt = "./images/poulp-loutre.png" src="photo de George">'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q6"
                        className="radioBtn"
                        value="q6-a3"
                        onChange={handleChangeQ6}
                      />
                      {'<img src="./images/poulpi-loutre.png" alt="photo de George">'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q6"
                        className="radioBtn"
                        value="q6-a4"
                        onChange={handleChangeQ6}
                      />
                      {'<img=src"./images/poulpi-loutre.png" alt="photo de George"></img>'}
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="seventh-question">
            <h2 className="question">
        Q7. Quelle balise dois-je utiliser pour mettre un lien?
            </h2>
            <div className="answers">
              <form
                onSubmit={(evt) => {
                evt.preventDefault();
              }}
              >
                <div className={currentClassName7}>
                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q7"
                        className="radioBtn"
                        value="q7-a1"
                        onChange={handleChangeQ7}
                      />
                      {'<a>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q7"
                        className="radioBtn"
                        value="q7-a2"
                        onChange={handleChangeQ7}
                      />
                      {'<href>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q7"
                        className="radioBtn"
                        value="q7-a3"
                        onChange={handleChangeQ7}
                      />
                      {'<src>'}
                    </label>
                  </div>

                  <div className="chosenAnswer">
                    <label className="label">
                      <input
                        type="radio"
                        name="q7"
                        className="radioBtn"
                        value="q7-a4"
                        onChange={handleChangeQ7}
                      />
                      {'<ul>'}
                    </label>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
      {
        quizzPop ?
          <SuccessPopQuizzContainer />

        : ''
      }
      <div className="btn-div">
        <Button
          className="btn-quizz"
          color="dark"
          onClick={checkAnswers}
        >
      Envoyer
        </Button>
      </div>
    </div>
  );
};
QuizzHtml.propTypes = {
  handleChangeQ1: PropTypes.func.isRequired,
  handleChangeQ2: PropTypes.func.isRequired,
  handleChangeQ3: PropTypes.func.isRequired,
  handleChangeQ4: PropTypes.func.isRequired,
  handleChangeQ5: PropTypes.func.isRequired,
  handleChangeQ6: PropTypes.func.isRequired,
  handleChangeQ7: PropTypes.func.isRequired,
  changeColor1: PropTypes.func.isRequired,
  changeColor2: PropTypes.func.isRequired,
  changeColor3: PropTypes.func.isRequired,
  changeColor4: PropTypes.func.isRequired,
  changeColor5: PropTypes.func.isRequired,
  changeColor6: PropTypes.func.isRequired,
  changeColor7: PropTypes.func.isRequired,
  quizzPop: PropTypes.string.isRequired,
  checkAnswers: PropTypes.func.isRequired,
  right1: PropTypes.bool,
  right2: PropTypes.bool,
  right3: PropTypes.bool,
  right4: PropTypes.bool,
  right5: PropTypes.bool,
  right6: PropTypes.bool,
  right7: PropTypes.bool,
  wrong1: PropTypes.bool,
  wrong2: PropTypes.bool,
  wrong3: PropTypes.bool,
  wrong4: PropTypes.bool,
  wrong5: PropTypes.bool,
  wrong6: PropTypes.bool,
  wrong7: PropTypes.bool,
};

QuizzHtml.defaultProps = {
  right1: false,
  right2: false,
  right3: false,
  right4: false,
  right5: false,
  right6: false,
  right7: false,
  wrong1: false,
  wrong2: false,
  wrong3: false,
  wrong4: false,
  wrong5: false,
  wrong6: false,
  wrong7: false,
};

export default QuizzHtml;
