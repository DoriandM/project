import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar1 = () => (

  <div>
    <div className="text-center">1 of 6 done</div>
    <Progress color="success" value="1" max="6" />
  </div>

);

export default ProgressBar1;
