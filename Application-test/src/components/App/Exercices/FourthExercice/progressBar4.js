import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar4 = () => (

  <div>
    <div className="text-center">4 of 6 done</div>
    <Progress color="success" value="4" max="6" />
  </div>

);

export default ProgressBar4;
