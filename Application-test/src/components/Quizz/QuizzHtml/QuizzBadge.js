import React from 'react';
import { Badge } from 'reactstrap';

export default class QuizzBadge extends React.Component {
  render() {
    return (
      <div>
        <Badge className="QuizzBadge" pill>Quizz HTML</Badge>
      </div>
    );
  }
}
