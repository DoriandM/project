import React from 'react';
import Highlight from 'react-highlight';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import LeftHeader from '~/components/LeftHeader';
import LessonBadge6 from './LessonBadge6';


import './SixthLesson.styl';

const SixthLesson = () => (

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
          <LessonBadge6 />
          <h2>
            Les liens
          </h2>
          <p>
            Maintenant que tu sais insérer des images, tu dois apprendre à afficher un lien.
          </p>
          <p>
            L'élément <span className="description-code">{'<a>'}{'</a>'}</span> (pour ancre ou anchor en anglais) définit un lien hypertext vers un autre endroit de la même page, ou vers une autre page sur le Web.
          </p>
          <p>
            Un lien s'écrit ainsi: <span className="description-code">{'<a' } href="lienVersMonSite">nom de mon lien{'</a>'}</span>.
          </p>
          <p>
            Généralement on place des liens dans une liste non-ordonnée afin de bien les distinguer, par exemple comme ceci:
          </p>
        </div>

        <div className="balises">
          <Highlight className="code-content">
            {'<ul> '} <br />
            {'  '}{'<li> '} <br />
            {'    '}{'<a href=”https://developer.mozilla.org”>mozilla</a>'} <br />
            {'  '}{'</li> '} <br />
            {'  '}{'<li> '} <br />
            {'    '}{'<a href=”https://developer.mozilla.org”>mozilla</a>'} <br />
            {'  '}{'</li> '} <br />
            {'</ul> '}

          </Highlight>
        </div>
        <p>
          A toi de jouer humain !
        </p>
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/FifthExercice" className="inactive" exact>Exercice précedent</Link>
          </Button>
          <Button color="info">
            <Link to="/SixthExercice" className="inactive" exact>Exercice suivant</Link>
          </Button>
        </div>
      </div>

      <div className="right-side right-side-l5">
        <div className="content-l5">
          <p className="p-desc">
          Voici un exemple de liens rangés dans une liste non-ordonnée :
          </p>
          <ul className="ul-l4">
            <li>
              <a href="https://developer.mozilla.org">lien vers le site développer mozilla</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org">lien vers le site développer mozilla</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);


export default SixthLesson;
