import React from 'react';
import { Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const SuccessPop5 = (props) => {
  return (
    <div className="alert-success">
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, tu as réussi à maitriser ton cinquième Super Pouvoir HTML !
        </p>
        <hr />
        <p className="mb-0">
          Je t'invite à cliquer ici pour passer à la leçon suivante: 
          <Button className="btn-success-pop" color="success">
            <Link to="/SixthLesson" className="inactive" exact>Leçon suivante</Link>
          </Button>
        </p>
      </Alert>
    </div>
  );
};

export default SuccessPop5;