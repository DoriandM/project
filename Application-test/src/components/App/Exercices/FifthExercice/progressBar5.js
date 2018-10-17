import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar5 = () => (

  <div>
    <div className="text-center">5 of 6 done</div>
    <Progress color="success" value="5" max="6" />
  </div>

);

export default ProgressBar5;