import React from 'react';
import LessonMenuBadges from '~/components/LessonMenuBadges';
import LessonMenuButtons from '~/components/LessonMenuButtons';

import './LessonMenu.styl';

const LessonMenu = () => (

  <div className="lessonWrapper">
    <h1 className="lessonsTitle">Quels super-pouvoirs souhaites-tu acquérir aujourd'hui?</h1>

    <LessonMenuBadges />

    <LessonMenuButtons />

  </div>
);

export default LessonMenu;
