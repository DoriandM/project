import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar3 = () => (

  <div>
    <div className="text-center">3 of 6 done</div>
    <Progress color="success" value="3" max="6" />
  </div>

);

export default ProgressBar3;
