import React from 'react';
import LeftHeader from '~/components//LeftHeader';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './introduction.styl';

const Intro = () => (
  <div className="intro-wrapper">
    
      <LeftHeader />
  
    <div className="premise">
      <div className="text">
        <h1>
          Le Commencement
        </h1>
        <p className="premier-p">
          Vous vous promenez tranquillement <strong>dans la forêt</strong> quelques mètres plus loin de votre maison de vacances, la brise vous rafraichit en vous portant les odeurs si particulière de cette forêt où vous avez passé tous vos étés.
        </p>
        <p className="dark">
          Vous commencez à entendre le crépitement de <strong>l'eau qui coule dans la rivière</strong>, celle-ci même où vous avez fait du kayak l'année dernière.
        </p>
        <p>
          Plus que quelques mètres et vous y serez, il ne vous reste plus qu'à passer <strong>le bouleau tordu</strong> qui vous a longtemps servi de repère, celui où vous aviez gravé votre nom au couteau suisse.
        </p>
        <p className="dark">
          <strong>Ca y est!</strong> Vous voyez l'eau! <strong>Quand soudain</strong>, un bruit sourd retenti. Une secousse vous renvoie quelques mètres en arrière. En perdant l'équilibre vous vous cognez la tête contre le bouleau.
        </p>
        <p>
          Plusieurs minutes ou plusieurs heures s'écoulent, <strong>vous n'en savez rien</strong>, ce que vous savez par contre, c'est que quelque chose à la fois visqueux comme un tentacule et doux comme des poils d'animaux vous touche.
        </p>
        <p className="dark">
          Vous ouvrez les yeux dans un sursaut, et à votre plus grande stupéfaction, ce qui vous tient est <strong>une sorte de mélange entre un poulpe et une loutre!</strong> Vous relevez la tête et vous voyez quelque chose qui ressemble à <strong>un gigantesque vaisseau spatial</strong> crashé dans la rivière.
        </p>
      </div>
      <img
        src={require('~/images/crash.png')}
        alt="george the octo-otter crash site"
        className="crash"
      />
      <div className="text">
        <p>
            La créature remarque que vous vous êtes réveillé et se tourne vers vous. Elle a <strong>une tête de loutre.</strong>
        </p>
        <p className="dark">
            Elle commence à vous parler d'une voix réconfortante: "Bonjour humain! Je suis <strong>George</strong> la poulpi-loutre intergalactique de la planète HTML! Je vous ai vu vous faire projeter par l'impact de mon vaisseau et votre planète, je suis désolé je vous ai soigné comme j'ai pu.
        </p>
        <p>
            Comme vous avez pu le remarquer je me suis crashé sur votre planète, il faut dire que la dernière fois que je suis passé par cette partie de l'univers il n'y avait pas de planète! Et puis mon GPS spatial m'indiquait de prendre <strong>à droite après Proxima du centaure</strong> et puis...
        </p>
        <p className="dark">
            Vous ne devez pas comprendre de quoi je vous parle, tant pis, ce n'est pas grave. <strong>J'aurais par contre besoin de votre aide</strong> pour retourner chez moi comme mon vaisseau s'est crashé! Est-ce que cela vous tenterai d'apprendre <strong>des super pouvoirs</strong> qui nous permettrai à tous les deux de sortir mon vaisseau de cette rivière?"
        </p>
        <p>
            Toujours sous le choc des évènements, <strong>vous oscillez la tête pour dire oui</strong>, l'alien esquisse un sourire, et reprend:
        </p>
        <p className="dark">
            "Bien dans ce cas nous ferions mieux de nous y mettre de suite!"
        </p>
      </div>
    </div>

    <div className="arrow-intro">
      <Button color="info">
        <Link to="/FirstLesson" className="inactive" exact>Première Leçon</Link>
      </Button>
    </div>
  </div>

);

export default Intro;
