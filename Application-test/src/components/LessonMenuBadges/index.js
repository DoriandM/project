
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

const LessonMenuBadges = () => (
  <div>
    <div className="lessonBadges">
      <Badge className="htmlBadge" color="primary" pill>
        <Link to="/Intro" className="inactive" exact>
          HTML
        </Link>
      </Badge>
      <Badge className="cssBadge" color="success" pill>CSS</Badge>
      <Badge className="jsBadge" color="warning" pill>Javascript</Badge>
      <Badge className="phpBadge" color="danger" pill>PHP</Badge>
    </div>
    <div className="planets">

      <img
        src={require('~/images/htmlPlanet.png')}
        alt="planet html"
        className="html-planet"
      />

      <img
        src={require('~/images/cssPlanet.png')}
        alt="planet css"
        className="css-planet"
      />

      <img
        src={require('~/images/jsWorld.png')}
        alt="planet html"
        className="js-planet"
      />

      <img
        src={require('~/images/PHP.png')}
        alt="planet html"
        className="php-planet"
      />

    </div>
  </div>
);

export default LessonMenuBadges;
