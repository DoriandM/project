import React from 'react';
import Highlight from 'react-highlight';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import LeftHeader from '~/components/LeftHeader';
import LessonBadge5 from './LessonBadge5';


import './FifthLesson.styl';

const FifthLesson = () => (

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

          <LessonBadge5 />
          <h2>
            Les images
          </h2>
          <p>
            Tu progresses vite, jeune padawan, mais tu dois surement te demander comment tu pourrais insérer une image ou une photo dans ta page, n'est-ce pas?
          </p>
          <p>
            Pour cela, tu as besoin de l'élément HTML <span className="description-code">{' <img> '}</span> qui va contenir des attributs. Des attributs, kézako ? Un attribut est une valeure supplémentaire qui permet de configurer ou d'adapter le comportement d'un élément.
          </p>
          <p>
            D'ailleurs, <span className="description-code">{' <img> '}</span> est une balise autofermante, elle n'a pas besoin de s'écrire <span className="description-code">{' <img></img> '}</span>, tu l'écriras simplement <span className="description-code">{' <img> '}</span>.
          </p>
          <p>
            Voici un exemple de balise image :
          </p>

          <div className="balises">
            <Highlight className="code-content hljs xml">
              {' <img src="lien de mon image" alt="description de mon image"> '}
            </Highlight>
          </div>
          <p>
            Dans notre exemple, la balise <span className="description-code">{' <img> '}</span> prend deux attributs essentiels: <span className="description-code">{'src=""'}</span> qui va contenir le lien ou le chemin de notre image, et l'attribut <span className="description-code">{'alt=""'}</span> qui va définir le texte alternatif utilisé lorsqu'il est impossible d'afficher l'image.
          </p>
          <p>
            Allons vite mettre ça en pratique!
          </p>

        </div>

        <div className="arrow-ex">
          <Button color="info">
            <Link to="/FourthExercice" className="inactive" exact>Exercice précedent</Link>
          </Button>
          <Button color="info">
            <Link to="/FifthExercice" className="inactive" exact>Exercice suivant</Link>
          </Button>
        </div>
      </div>

      <div className="right-side right-side-l5">
        <div className="content-l5">
          <p className="p-desc">Voici une photo de moi à la plage</p>
          <img
            src={require('~/images/at-the-beach.jpg')}
            alt="Me at the beach"
            className="photo"
          />
        </div>
      </div>

    </div>
  </div>
);

export default FifthLesson;
