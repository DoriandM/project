import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar2 = () => (

  <div>
    <div className="text-center">2 of 6 done</div>
    <Progress color="success" value="2" max="6" />
  </div>

);

export default ProgressBar2;
