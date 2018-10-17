import React from 'react';
import { Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const SuccessPop6 = (props) => {
  return (
    <div className="alert-success">
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, tu as réussi à maitriser ton sixième Super Pouvoir HTML !
        </p>
        <hr />
        <p className="mb-0">
          Je t'invite à cliquer ici pour passer au Quizz HTML:
          <Button className="btn-success-pop" color="success">
            <Link to="/QuizzHtml" className="inactive" exact>Quizz HTML</Link>
          </Button>
        </p>
      </Alert>
    </div>
  );
};

export default SuccessPop6;
