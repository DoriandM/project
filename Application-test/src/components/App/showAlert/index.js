import React from 'react';
import { Alert, Button } from 'reactstrap';;

const ShowAlert = (props) => {
  return (
    <div className="alert-success">
      <Alert color="danger">
        <h4 className="alert-heading">Woups !</h4>
        <p>
         Ce n'est pas la réponse qui est attendue, vérifie bien ton code.
        </p>
        <hr />
        <p className="mb-0">
          Tu peux aussi cliquer sur le bouton "indice" afin d'obtenir un peu d'aide.
        </p>
      </Alert>
    </div>
  );
};

export default ShowAlert;
