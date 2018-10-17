import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const SuccessPopQuizz = ({ totalRightAnswer }) => {
  return (
    <div className="alert-success">
      <Alert color="success">
        <h4 className="alert-heading">Résultats</h4>
        <p>
         Tu as {totalRightAnswer} réponses justes sur 7 !
        </p>
        <p>Voici les réponses attendues: </p>
        <ul className="answer-list">
          <li>Q1: {'<html>'}</li>
          <li>Q2: {'<title>'}</li>
          <li>Q3: {'<h1>'}</li>
          <li>Q4: Créer un conteneur pour notre code</li>
          <li>Q5: {'<ol>'}
            {'<li>'}
            {'<li>'}
            {'</ol>'}
          </li>
          <li>Q6: {'<img src="./images/poulpi-loutre.png" alt="photo de George"'}></li>
          <li>Q7: {'<a>'}</li>
        </ul>
        <hr />
        <p className="mb-0">
          Je t'invite à cliquer ici pour passer à la suite:
          <Button className="btn-success-pop" color="success">
            <Link to="#" className="inactive" exact>Suite de l'aventure</Link>
          </Button>
        </p>
      </Alert>
      
    </div>
  );
};

SuccessPopQuizz.propTypes = {
  totalRightAnswer: PropTypes.number.isRequired,
};
export default SuccessPopQuizz;
