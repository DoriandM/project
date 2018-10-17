import React from 'react';

// lessons
import LessonMenu from '~/components/LessonMenu';
import FirstLesson from '~/components/App/Lessons/FirstLesson';
import SecondLesson from '~/components/App/Lessons/SecondLesson';
import ThirdLesson from '~/components/App/Lessons/ThirdLesson';
import FourthLesson from '~/components/App/Lessons/FourthLesson';
import FifthLesson from '~/components/App/Lessons/FifthLesson';
import SixthLesson from '~/components/App/Lessons/SixthLesson';

// exercices
import FirstExerciceContainer from '~/containers/exerciceContainers/FirstExerciceContainer';
import SecondExerciceContainer from '~/containers/exerciceContainers/SecondExerciceContainer';
import ThirdExerciceContainer from '~/containers/exerciceContainers/ThirdExerciceContainer';
import FourthExerciceContainer from '~/containers/exerciceContainers/FourthExerciceContainer';
import FifthExerciceContainer from '~/containers/exerciceContainers/FifthExerciceContainer';
import SixthExerciceContainer from '~/containers/exerciceContainers/SixthExerciceContainer';

// Quizz
import QuizzHtml from '~/containers/quizzContainers/QuizzContainer';

// Intro
import Intro from '~/components/App/Intro';

// others

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.styl';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LessonMenu} />
      <Route exact path="/Intro" component={Intro} />
      <Route exact path="/FirstLesson" component={FirstLesson} />
      <Route exact path="/SecondLesson" component={SecondLesson} />
      <Route exact path="/ThirdLesson" component={ThirdLesson} />
      <Route exact path="/FourthLesson" component={FourthLesson} />
      <Route exact path="/FifthLesson" component={FifthLesson} />
      <Route exact path="/SixthLesson" component={SixthLesson} />
      <Route exact path="/FirstExercice" component={FirstExerciceContainer} />
      <Route exact path="/SecondExercice" component={SecondExerciceContainer} />
      <Route exact path="/ThirdExercice" component={ThirdExerciceContainer} />
      <Route exact path="/FourthExercice" component={FourthExerciceContainer} />
      <Route exact path="/FifthExercice" component={FifthExerciceContainer} />
      <Route exact path="/SixthExercice" component={SixthExerciceContainer} />
      <Route exact path="/QuizzHtml" component={QuizzHtml} />

    </Switch>
  </Router>
);


export default App;
