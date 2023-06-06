import React from 'react';
import Button from 'react-bootstrap/Button';

const DistanceButton = ({ distance, onChange }) => (
  <div className='px-2'>
    <Button variant='outline-primary' type='submit' onClick={onChange}>
      {distance}
    </Button>
  </div>
);

export default DistanceButton;
