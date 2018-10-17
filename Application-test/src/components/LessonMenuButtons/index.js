import React from 'react';
import { Badge } from 'reactstrap';


export default class LessonMenuButtons extends React.Component {
  render() {
    return (
      <div className="lessonButtons" >
        <Badge className="goBack" color="light">Go back</Badge>
        <Badge className="reset"color="dark">RESET ALL</Badge>
      </div>
    );
  }
}
