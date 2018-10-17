import React from 'react';
import Highlight from 'react-highlight';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import LeftHeader from '~/components/LeftHeader';
import LessonBadge4 from './LessonBadge4';


import './FourthLesson.styl';

const FourthLesson = () => (

  <div>
    <div className="wrapper">
      <div className="lesson-left">

        <div className="page-nav">
          <LeftHeader />
        </div>
        <img
          src={require('~/images/George.png')}
          alt="george the octo-otter"
          className="lesson-george"
        />
        <div className="george-dial">
         <LessonBadge4 />
          <h2>
            Les listes
          </h2>
          <p>
            Maintenant que nous avons un conteneur et un paragraphe, je vais t'enseigner la maîtrise des listes numérotées et des listes à puces.
          </p>
          <p>
            Les listes non-ordonnées n'ont pas de notion d'ordre et peuvent mélanger leurs éléments sans que cela ne modifie leur sens, une liste de course est un bon exemple de liste non-ordonnée. Elle s'écrit comme ceci:
          </p>

          <div className="balises">
            <Highlight className="code-content hljs xml">
              {' <ul> '} <br />
              {'  '}{' <li>Elément de la liste</li>' } <br />
              {'  '}{' <li>Elément de la liste</li> '} <br />
              {' </ul> '}
            </Highlight>
          </div>
          <p>
            Chaque élément de la liste se trouve dans une balise <span className="description-code">{' <li> '}</span>.
          </p>
          <p>
            Dans le cas d'une liste ordonnée, les éléments de la liste seront réalisés dans un ordre donné, ils seront donc numérotés. Cette liste s'écrit ainsi:
          </p>

          <div className="balises">
            <Highlight className="code-content hljs xml">
              {'<ol>'} <br />
              {'  '}{'<li>Elément de la liste</li>'} <br />
              {'  '}{'<li>Elément de la liste</li>'} <br />
              {'</ol>'}
            </Highlight>
          </div>

          <p>
            Encore une fois, on écrit toujours les éléments de la liste dans une balise <span className="description-code">{' <li> '}</span>.
          </p>

          <p>
            Il faut donc utiliser <span className="description-code">{' <ol> '}</span> pour créer une liste ordonnée (ordered-list) et <span className="description-code">{' <ul> '}</span> pour réaliser une liste non-ordonnée (unordered-list).
          </p>


        </div>

        <div className="arrow-ex">
          <Button color="info">
            <Link to="/ThirdExercice" className="inactive" exact>Exercice précedent</Link>
          </Button>
          <Button color="info">
            <Link to="/FourthExercice" className="inactive" exact>Exercice suivant</Link>
          </Button>
        </div>
      </div>

      <div className="right-side right-side-l4">
        <div className="content-l4">
          <p>Voici une liste non-ordonnée:</p>
          <ul className="ul-l4">
            <li>Élément de la liste</li>
            <li>Élément de la liste</li>
          </ul>
          <p>Voici une liste ordonnée:</p>
          <ol className="ol-l4">
            <li>Élément 1 de la liste</li>
            <li>Élément 2 de la liste</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default FourthLesson;
