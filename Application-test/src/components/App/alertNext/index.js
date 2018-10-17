import React from 'react';
import { Alert } from 'reactstrap';

import './alert.styl';

const AlertNext = () => (

    <div className="alert">
        <Alert color="warning">
            Si tu n'y arrives pas tu peux cliquer sur le bouton "Leçon suivante" pour passer à la suivante
        </Alert>
    </div>
);

export default AlertNext;
