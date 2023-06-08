import React, { useState } from 'react';
import DistanceButton from '../DistanceButton/DistanceButton';
import FormComponent from '../FormComponent/FormComponent';
import Pace from '../Pace/Pace';
import Time from '../Time/Time';

const Calculator = () => {
  const [distanceValue, setDistanceValue] = useState('');
  const [firstPaceValue, setFirstPaceValue] = useState('');
  const [secondPaceValue, setSecondPaceValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [speedValue, setSpeedValue] = useState('');

  const calcTimeValue = (e) => {
    setFirstPaceValue(e.target.value);
    setTimeValue(Math.round(distanceValue / e.target.value));
  };

  const calcFirstPaceValue = (e) => {
    setTimeValue(e.target.value);
    setFirstPaceValue(distanceValue / e.target.value);
  };

  const calcSecondPaceValue = (e) => {
    setSpeedValue(e.target.value);
    setSecondPaceValue(speedValue / e.target.value);
  };

  const calcSpeedValue = (e) => {
    setSecondPaceValue(e.target.value);
    setSpeedValue(secondPaceValue / 10);
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
        <Pace
          type='number'
          value={firstPaceValue}
          title='Темп'
          onChange={(e) => calcTimeValue(e)}
        />
        <Time
          type='number'
          value={timeValue}
          title='Время'
          onChange={(e) => calcFirstPaceValue(e)}
        />
      </div>
      <h2 className='my-3 d-flex justify-content-center'>Темп/скорость</h2>
      <div className='d-flex justify-content-center'>
        <Pace
          type='number'
          value={secondPaceValue}
          title='Темп'
          onChange={(e) => calcSpeedValue(e)}
        />
        <FormComponent
          type='number'
          value={speedValue}
          title='Скорость'
          onChange={(e) => calcSecondPaceValue(e)}
        />
      </div>
    </div>
  );
};

export default Calculator;
