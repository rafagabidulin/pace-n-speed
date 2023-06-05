import React, { useState } from 'react';
import DistanceButton from '../DistanceButton/DistanceButton';
import FormComponent from '../FormComponent/FormComponent';

const Calculator = () => {
  const [value, setValue] = useState('');

  const handleSetValue = (value: React.SetStateAction<string>) => setValue(value);

  return (
    <div className='m-3'>
      <h2 className='my-3 d-flex justify-content-center'>Дистанция/темп</h2>
      <div className='d-flex justify-content-center'>
        <DistanceButton distance={'42.2'} />
        <DistanceButton distance={'21.1'} />
        <DistanceButton distance={'15'} />
        <DistanceButton distance={'10'} />
        <DistanceButton distance={'5'} />
        <DistanceButton distance={'3'} />
      </div>
      <div className='d-flex justify-content-center'>
        <FormComponent value={handleSetValue} title='Дистанция' />
        <FormComponent value={handleSetValue} title='Темп' />
        <FormComponent value={handleSetValue} title='Время' />
      </div>
      <h2 className='my-3 d-flex justify-content-center'>Темп/скорость</h2>
      <div className='d-flex justify-content-center'>
        <FormComponent value={handleSetValue} title='Темп' />
        <FormComponent value={handleSetValue} title='Скорость' />
      </div>
    </div>
  );
};

export default Calculator;
