import React from 'react';
import { Link } from 'react-router-dom';

import './LeftHeader.styl';

const LeftHeader = () => (

  <div className="page-nav">
    <div className="nav">
      <Link className="navBadges-link" to="/FirstLesson">Leçon 1</Link>
      <Link className="navBadges-link" to="/SecondLesson">Leçon 2</Link>
      <Link className="navBadges-link" to="/ThirdLesson">Leçon 3</Link>
      <Link className="navBadges-link" to="/FourthLesson">Leçon 4</Link>
      <Link className="navBadges-link" to="/FifthLesson">Leçon 5</Link>
      <Link className="navBadges-link" to="/SixthLesson">Leçon 6</Link>
      <Link className="navBadges-link" to="/QuizzHtml">Quizz</Link>
    </div>
    <Link to="/" className="homepage" exact >Homepage</Link>
  </div>
);

export default LeftHeader;
