import React from 'react';
import Highlight from 'react-highlight';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import LeftHeader from '~/components/LeftHeader';
import LessonBadge2 from './LessonBadge2';


import './SecondLesson.styl';

const SecondLesson = () => (

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
          <LessonBadge2 />
          <h2>
            Le pouvoir de l'encapsulation
          </h2>
          <p>
            Sache mon ami humanoïde qu'il est important de bien ranger son code.
          </p>
          <p>
            Le <span className="description-code">{'<header>'} {'</header>'}</span> est l'entête de ta page, tu pourras y retrouver à l'intérieur pleins de lignes utiles comme le <span className="description-code">{'<h1>Titre de ma page</h1>'}</span>, les boutons de navigations, les sous-titres, et bien d'autres choses en fonction des besoins de ta page.
          </p>
          <p>
            Le h1 étant unique par fichier, les h2, h3, h4, h5 et h6 sont très utiles pour écrire d'autres titres moins importants que le h dans ta page.Le numéro après le h déterminera la taille du texte, h1 étant le plus grand, un peu comme des poupées russes. Il peut y avoir plusieurs h2, h3 etc...
          </p>
        </div>
        <h2>exemple</h2>
        <div className="balises">
          <Highlight className="code-content">
            {' <html> '} <br />
            {'  '}{' <head> '} <br />
            {'    '}{' <title> '} <br />
            {'      '}{' Titre de l\'onglet de ma page '} <br />
            {'    '}{' </title> '} <br />
            {'  '}{' </head> '} <br />
            {'  '}{' <body> '} <br />
            {'    '}{' <header> '} <br />
            {'      '}{' <h1> '} <br />
            {'        '}{' Titre h1 unique '} <br />
            {'      '}{' </h1> '} <br />
            {'      '}{' <h2> '} <br />
            {'        '}{' Titre h2 '} <br />
            {'      '}{' </h2> '} <br />
            {'      '}{' <h3> '} <br />
            {'        '}{' Titre h3 '} <br />
            {'      '}{' </h3> '} <br />
            {'    '}{' </header> '} <br />
            {'  '}{' </body> '} <br />
            {' </html> '}
          </Highlight>
        </div>
        <h2>
          Et si on s'exerçait
        </h2>
        <p>
          Clique sur <strong>exercice suivant</strong> pour mettre en pratique ce nouveau super pouvoir.
        </p>
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/FirstExercice" className="inactive" exact>Exercice précedent</Link>
          </Button>
          <Button color="info">
            <Link to="/SecondExercice" className="inactive" exact>Exercice suivant</Link>
          </Button>
        </div>
      </div>
      <div className="right-side">
        <header className="header-secondLesson">
          <h1 className="second-lesson-main-title">Titre principal unique (h1)</h1>
          <h2 className="second-lesson-second-title">Titre (h2)</h2>
          <h3 className="third-title">Titre (h3)</h3>
          <h4 className="forth-title">Titre (h4)</h4>
          <h5 className="fifth-title">Titre (h5)</h5>
          <h6 className="sixth-title">Titre (h6)</h6>
        </header>
      </div>
    </div>
  </div>

);


export default SecondLesson;
