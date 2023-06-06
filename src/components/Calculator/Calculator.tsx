import React, { useState } from 'react';
import DistanceButton from '../DistanceButton/DistanceButton';
import FormComponent from '../FormComponent/FormComponent';

const Calculator = () => {
  const [distanceValue, setDistanceValue] = useState('');
  const [paceValue, setPaceValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [speedValue, setSpeedValue] = useState('');

  const calcTimeValue = (e) => {
    setPaceValue(e.target.value);
    setTimeValue(distanceValue / paceValue);
  };

  const calcPaceValue = (e) => {
    setTimeValue(e.target.value);
    setPaceValue(distanceValue / timeValue);
  };

  const calcSpeedValue = (e) => {
    setPaceValue(e.target.value);
    setSpeedValue(paceValue / 10);
  };

  return (
    <div className='m-3'>
      <h2 className='my-3 d-flex justify-content-center'>Дистанция/темп</h2>
      <div className='d-flex justify-content-center'>
        <DistanceButton distance={'42.2'} onChange={() => setDistanceValue(42.2)} />
        <DistanceButton distance={'21.1'} onChange={() => setDistanceValue(21.1)} />
        <DistanceButton distance={'15'} onChange={() => setDistanceValue(15)} />
        <DistanceButton distance={'10'} onChange={() => setDistanceValue(10)} />
        <DistanceButton distance={'5'} onChange={() => setDistanceValue(5)} />
        <DistanceButton distance={'3'} onChange={() => setDistanceValue(3)} />
      </div>
      <div className='d-flex justify-content-center'>
        <FormComponent
          type='number'
          value={distanceValue}
          title='Дистанция'
          onChange={(e) => setDistanceValue(e.target.value)}
        />
        <FormComponent
          type='number'
          value={paceValue}
          title='Темп'
          onChange={(e) => calcPaceValue(e)}
        />
        <FormComponent
          type='number'
          value={timeValue}
          title='Время'
          onChange={(e) => calcTimeValue(e)}
        />
      </div>
      <h2 className='my-3 d-flex justify-content-center'>Темп/скорость</h2>
      <div className='d-flex justify-content-center'>
        <FormComponent
          type='number'
          value={paceValue}
          title='Темп'
          onChange={(e) => calcPaceValue(e)}
        />
        <FormComponent
          type='number'
          value={speedValue}
          title='Скорость'
          onChange={(e) => calcSpeedValue(e)}
        />
      </div>
    </div>
  );
};

export default Calculator;
