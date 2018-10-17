import React from 'react';
import Highlight from 'react-highlight';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import LeftHeader from '~/components/LeftHeader';
import LessonBadge1 from './Lessonbadge1';


import './FirstLesson.styl';

const FirstLesson = () => (

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
          <LessonBadge1 />
          <h2>
            Hello Human !
          </h2>
          <p className="description">
            Afin de m’aider à contacter mes proches pour qu’ils puissent venir me secourir, je vais te transmettre, lors de cette première leçon, le pouvoir du langage HTML. C’est un grand pouvoir, qui entraîne de grandes…. Enfin tu vois ce que je veux dire hein ? Alors c’est parti !
          </p>
        </div>
        <h2>
          La structure d'une page
        </h2>
        <p className="description">
          Une page HTML est ce que l'on appelle le squelette de toute page web, c’est elle qui va définir le contenu de notre page. Par exemple, un titre, un article, une photo. On dit que c’est un langage de balisage car on utilise des balises pour définir chaque contenu. Une page web HTML se constitue d’une balise ouvrante <span className="description-code">{' <html> '}</span> au début de la page et d’une balise fermante <span className="description-code">{' </html> '}</span> en fin de page. Ainsi on pourra écrire notre contenu à l’intérieur de ces balises.
        </p>
        <p>
          Il y a une balise <span className="description-code">{' <head> '}</span> dans laquelle on donne un titre à notre page. Ce titre apparaitra dans l'onglet de la page internet, il s'écrit comme ceci:
        </p>

        <div className="balises">
          <Highlight className="code-content">
            {'<head>'} <br />
            {'  '}{'<title>Mon Titre</title>'} <br />
            {'</head>'}
          </Highlight>
        </div>
        <p>
          Ensuite une page web est constitué d'une balise <span className="description-code">{'<body> </body>'}</span> qui va contenir tous les éléments de notre page web comme une entête <span className="description-code">{'<header></header>'}</span>, des articles, des divs, etc... ainsi qu'un <span className="description-code">{'<footer></footer>'}</span> en bas de page.
        </p>
        <p>
          Coder une page web ressemblera généralement à ça :
        </p>
        <div className="balises">
          <Highlight className="code-content">
            {'<html>'} <br />
            {'  '}{'<head>'} <br />
            {'    '}{'<title>Titre de l\'onglet de ma page</title>'} <br />
            {'  '}{'</head>'} <br />
            {'  '}{'<body>'} <br />
            {'    '}{'<header>'} <br />
            {'      '}{'<h1>Titre de la page</h1>'} <br />
            {'    '}{'</header>'} <br />
            {'    '}{'<div>'} <br />
            {'      '}{'Contenu de la page, articles, paragraphes etc...'} <br />
            {'    '}{'</div>'} <br />
            {'    '}{'<footer>'} <br />
            {'      '}{'Bas de la page'} <br />
            {'    '}{'</footer>'} <br />
            {'  '}{'</body>'} <br />
            {'</html>'}
          </Highlight>
        </div>

        <h2>
          Le pouvoir de l'indentation
        </h2>
        <p>
          Ainsi, tu remarqueras qu’il faut respecter une indentation, il y a une hiérarchie  dans les balises. La balises h1 appartient à la balise header, qui elle même appartient à la balise body. On peut dire que h1 est l’enfant de header et header est l’enfant de body. Ainsi, les balises header, div et footer sont “frères et soeurs” car elles sont toutes les enfants de body.
        </p>
        <h2>
          Et si on s'exerçait un peu?
        </h2>
        <p>
          Quoi….tu as la tête qui tourne ? Je comprends que toutes ces notions te bouleversent, cela fait souvent ça la première fois. Je te propose donc qu’on s’exerce ensemble pas à pas. Cliques sur <strong>exercice suivant</strong> pour commencer avec un premier exercice.
        </p>
        <div className="arrow-ex">
          <Button color="info">
            <Link to="/Intro" className="inactive" exact>Retour a l'intro</Link>
          </Button>
          <Button color="info">
            <Link to="/FirstExercice" className="inactive" exact>Exercice suivant</Link>
          </Button>
        </div>
      </div>

      <div className="right-side">
        <header className="header">
          <h1 className="main-title">Titre principal (h1)</h1>
          <h2 className="second-title">Titre secondaire (h2)</h2>
          <p className="header-p">(header)</p>
        </header>

        <div className="content">
          <div className="text1">
            <h3 className="div">(div)</h3>
            <p>
              Sed porta, justo at imperdiet pretium, neque ipsum feugiat elit, quis consequat quam ipsum at quam. Donec egestas elementum mi, non ultrices dolor lacinia vitae. Nam condimentum eleifend aliquam. Ut vel dictum mi. Curabitur pulvinar turpis nec iaculis vestibulum. Suspendisse nec purus at velit commodo semper in eget purus. Donec vel odio sodales, blandit dolor id, viverra nisl.<span className="p">(p)</span>
            </p>
          </div>

          <div className="text2">
            <h3 className="div">(div)</h3>
            <p>
              Maecenas finibus lectus finibus dolor euismod tincidunt. Nullam finibus, quam at tempus commodo, nunc nunc accumsan magna, vitae tempus lectus turpis vel sapien. Donec ornare aliquam nibh non egestas. Nulla quam sem, tincidunt nec accumsan vitae, interdum id diam. Aliquam eu sapien non dui dapibus ornare quis non felis.<span className="p">(p)</span>
            </p>
          </div>

        </div>
        <footer className="footer"> Mon footer (footer)</footer>
      </div>

    </div>
  </div>

);


export default FirstLesson;
