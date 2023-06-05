import React from 'react';
import Button from 'react-bootstrap/Button';

const DistanceButton = ({ distance }) => {
  return (
    <div className='px-2'>
      <Button variant='outline-primary' type='submit'>
        {distance}
      </Button>
    </div>
  );
};

export default DistanceButton;
