import React from 'react';
import Highlight from 'react-highlight';

import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import LeftHeader from '~/components/LeftHeader';
import LessonBadge3 from './LessonBadge3';


import './ThirdLesson.styl';

const ThirdLesson = () => (

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
        <LessonBadge3 />
          <h2>
            Let's continue
          </h2>
          <p>
            Hum, je sens le pouvoir grandir en toi. Tu sais maintenant construire un header avec des titres.
          </p>
        </div>
        <h2>
          Le contenu d'une page
        </h2>
        <p>
          Il faut maintenant nous occuper du contenu de la page. Il est judicieux de placer ton contenu dans ce que l'on appelle des conteneurs. Une <span className="description-code">{' <div>Mon contenu</div>'}</span> par exemple, est un conteneur générique qui permet d'organiser du contenu sans représenter quelque chose de particulier. Il peut être utilisé pour regrouper des éléments de contenu comme un paragraphe <span className="description-code">{' <p>Mon paragraphe</p> '}</span>.
        </p>
        <p>
          Il ne faudra pas oublier de fermer les balises <span className="description-code">{' <div> '}</span> et <span className="description-code">{' <p> '}</span> comme ceci:
        </p>

        <div className="balises">
          <Highlight className="code-content">
            {' <div> '} <br />
            {'  '}{' <p>Mon paragraphe</p>  '}  <br />
            {' </div> '}
          </Highlight>
        </div>
        <h3>
          A toi de jouer!
        </h3>
        <p>
          Clique sur <strong>exercice suivant</strong> pour le troisiéme exercice.
        </p>
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/SecondExercice" className="inactive" exact>Exercice précedent</Link>
          </Button>
          <Button color="info">
            <Link to="/ThirdExercice" className="inactive" exact>Exercice suivant</Link>
          </Button>
        </div>
      </div>
      <div className="right-side right-side-l3">
        <div className="content-l3">
          <h3 className="div-l3-right">(div)</h3>

          <div className="text-lesson-3">
            <p className="p-l3-right">
            Sed cursus lacus at massa tincidunt, ac facilisis dui ornare. Vivamus metus nibh, ornare id turpis nec, pulvinar hendrerit ligula. Duis mollis dignissim enim ac laoreet. Morbi at euismod nibh, sit amet convallis neque. Vivamus dignissim cursus metus et sodales. Mauris tellus est, pellentesque eu malesuada sed, accumsan at nisi. Aliquam non felis lorem. Morbi sit amet rutrum nulla, quis pharetra dolor. Pellentesque commodo pharetra auctor. Vestibulum et mi eros.<strong>(p)</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ThirdLesson;
